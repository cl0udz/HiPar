#!/usr/bin/env bash
## to be called from pu directory

## TODO: do we really have to re-instrument program and tests for every iteration?

JALANGI_HOME=../jalangi
ANALYSES_HOME=src/js/analysis
ABS_JALANGI=`readlink -f ${JALANGI_HOME}`
ANALYSES_HOME_ABS=`readlink -f ${ANALYSES_HOME}`
VAR_DECL="J$.N(NaN, 'uTILs2342ClEAnPC', uTILs2342ClEAnPC, false, false, false);J$.N(NaN, 'uTILs2342ClEAnPC', uTILs2342ClEAnPC, false, false, false); var uTILs2342ClEAnPC = J$.W(NaN, 'uTILs2342ClEAnPC', J$.F(NaN, J$.I(typeof require === 'undefined' ? require = J$.R(NaN, 'require', undefined, true, true) : require = J$.R(NaN, 'require', require, true, true)), false)(J$.T(NaN, 'iflow', 21, false)), uTILs2342ClEAnPC, false, true);\n"

baseDir=`readlink -f $1`
resultsDir=`readlink -f $2`

iterCount=1
updtAdded=1

# Instrument program files
mkdir jalangi_tmp
cd jalangi_tmp
for program in `find ${baseDir}/program/ -name "*.js" -not -name "*_jalangi_*" | xargs`
do
    echo "Instrument ${program}"
    node ${ABS_JALANGI}/src/js/instrument/esnstrument.js ${program} --out ${program}
    sed -i "1s/^/$VAR_DECL/" ${program}
    node ${ANALYSES_HOME_ABS}/PCCleaner.js "${program}"
done
cd ..

for test in ${baseDir}/tests/*
do

    printf "\n"
    # Run our analysis using the test file
    TEST_FILE=`echo ${test} | grep -o ^.[^\\.]*`
    TEST_FILE_ABS=`readlink -f ${TEST_FILE}`

    test_absolute_path=`readlink -f ${test}`
    ABS_JALANGI=`readlink -f ${JALANGI_HOME}`
    ABS_AN_HOME=`readlink -f ${ANALYSES_HOME}`

    cd jalangi_tmp
    echo "Instrument file $test_absolute_path"
    pwd
    cp ${test_absolute_path} ${baseDir}/program/3dcube-original.js
    node ${ABS_JALANGI}/src/js/instrument/esnstrument.js ${test_absolute_path} --out ${test_absolute_path}
    sed -i "1s/^/$VAR_DECL/" "${TEST_FILE_ABS}.js"
    node ${ANALYSES_HOME_ABS}/PCCleaner.js "${TEST_FILE_ABS}.js"
    cd ..
done

while [ ${updtAdded} = 1 ]
do
echo "========================================== ITERATION ${iterCount} =========================================="
updtAdded=0;
rm -f ${resultsDir}/trace*.json
rm -f jalangi_tmp/trace*.json

test=${baseDir}/tests/octane.js
printf "\n"
echo "RUN TEST: ${test}"
# Run our analysis using the test file
TEST_FILE=`echo ${test} | grep -o ^.[^\\.]*`
TEST_FILE_ABS=`readlink -f ${TEST_FILE}`

test_absolute_path=`readlink -f ${test}`
ABS_JALANGI=`readlink -f ${JALANGI_HOME}`
ABS_AN_HOME=`readlink -f ${ANALYSES_HOME}`
cd jalangi_tmp

echo " Run analysis "
out=`node  --max-old-space-size=4096 ${ABS_JALANGI}/src/js/commands/direct.js --smemory --analysis ${ABS_AN_HOME}/WrappedPrimitivesFlowAnalysis.js "${TEST_FILE_ABS}.js"`

# echo -e "$out"
echo "Done with analysis"
lines=`echo ${out} | grep "Violation of Permissive-Upgrade Policy" | wc -l`
cd ..
if [ ${lines} = 1 ]
then
    updtAdded=1
    iterCount=`expr ${iterCount} + 1`
    break
fi


#cp *v8.log ..
if [ ${iterCount} = 30 ]
    then
        echo "Warning: Stopping iterative analysis (too many iterations)"
        break;
    fi
done

ls jalangi_tmp
# Clean temp files
#cp ${baseDir}/tests/*\_jalangi\_*  ${resultsDir}/tests/instrumented.js
#rm ${baseDir}/program/*\_jalangi\_*
#rm ${baseDir}/tests/*\_jalangi\_*
cp jalangi_tmp/upgrades.json ${resultsDir}/output.json
mv jalangi_tmp/trace*.json ${resultsDir}/
rm ./jalangi_tmp/*
rmdir ./jalangi_tmp

#rm -f upgrades.json
#rm -f flows.json
echo ${iterCount} >> ${resultsDir}/iterations.txt


lines=`echo ${out} | grep "Error:" | wc -l`
if [ ${lines} -gt 0 ]
then
    echo ${out}
    echo "ERROR" >> ${resultsDir}/output.json
fi

echo ""
echo "Finished iterative analysis of ${baseDir}"
