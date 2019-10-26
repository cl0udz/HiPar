#!/usr/bin/env bash
## to be called from pu directory

JALANGI_HOME=../../jalangi
ANALYSES_HOME=src/js/analysis
SUNSPIDER_PATH=tests/original-sunspider
red=$(tput setaf 1)
green=$(tput setaf 2)
normal=$(tput sgr0)
ABS_JALANGI=`readlink -f ${JALANGI_HOME}`
ANALYSES_HOME_ABS=`readlink -f ${ANALYSES_HOME}`
NB_POLICIES=1

TEST_BASE=$1
VERIFY=0
E2E=0
INTERPRETER=./src/js/analysis/LightweightTraceInterpreter.js

while [ "$1" != "" ]; do
    case $1 in
        -i | --interpreter )    shift
                                INTERPRETER=$1
                                ;;
        -e2e | --end2end )      E2E=1
                                ;;
        -* )                    echo "Wrong option"
                                usage
                                exit 1
    esac
    shift
done

rm -f results/trace.json

resultsDir=results/`basename ${TEST_BASE}`_`date +%s`
mkdir ${resultsDir}

baseDirsForIterative=""
offset=2;

# 1) seed policies into benchmarks
for bmPath in ${TEST_BASE}/*
do
  bmFile=$(basename "${bmPath}")
  bm="${bmFile%.*}"
  echo "Seeding policies into ${bm}"
  mkdir ${resultsDir}/${bm}
  for policyCtr in $(seq 1 ${NB_POLICIES})
  do
    policyCtrUp=`expr $policyCtr + $offset`    
    targetDir=${resultsDir}/${bm}/policy_${policyCtrUp}
    mkdir ${targetDir}
    mkdir ${targetDir}/program
    mkdir ${targetDir}/tests
    cp ${bmPath}/tests/* ${targetDir}/tests
    for test in ${bmPath}/program/*
    do
        testName=$(basename "${test}")
        node ${ANALYSES_HOME}/PolicySeeder.js ${test} ${targetDir}/program/${testName} ${policyCtrUp}
    done
    baseDirsForIterative="${baseDirsForIterative} ${targetDir}"
  done
done
cd ${resultsDir}
ln -s ../../tests/TestUtils.js
cd -

# 2) check if benchmarks with seeded policies run without errors
#for baseDirIterative in `echo ${baseDirsForIterative} | xargs`
#do
#  cmd="node ${baseDirIterative}/tests/bm.js"
#  if ! ${cmd} &> /dev/null; then
#    echo "Benchmark crashes after seeding policy!"
#    echo "Run this to reproduce: ${cmd}"
#    exit 1
#  fi
#  echo "Seeded benchmark seems to work: ${baseDirIterative}"
#done

# 3) run iterative analysis for each seeded benchmark
cd ${resultsDir}
ln -s ../../tests/TestUtils.js
cd -
for baseDirIterative in `echo ${baseDirsForIterative} | xargs`
do
  ./scripts/iterative_analysis_octane.sh ${baseDirIterative} ${baseDirIterative}
done

echo ""
echo "Done with online part of study."
echo "Intermediate results are in ${resultsDir}"
