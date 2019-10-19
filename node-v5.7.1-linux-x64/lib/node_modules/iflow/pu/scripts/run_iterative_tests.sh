#!/usr/bin/env bash
## to be called from pu directory
JALANGI_HOME=../jalangi
ANALYSES_HOME=src/js/analysis/

red=$(tput setaf 1)
green=$(tput setaf 2)
normal=$(tput sgr0)
ABS_JALANGI=`readlink -f $JALANGI_HOME`
ANALYSES_HOME_ABS=`readlink -f $ANALYSES_HOME`
ANALYSIS_NAME="WrappedPrimitivesFlowAnalysis.js"
VAR_DECL="J$.N(NaN, 'uTILs2342ClEAnPC', uTILs2342ClEAnPC, false, false, false);J$.N(NaN, 'uTILs2342ClEAnPC', uTILs2342ClEAnPC, false, false, false); var uTILs2342ClEAnPC = J$.W(NaN, 'uTILs2342ClEAnPC', J$.F(NaN, J$.I(typeof require === 'undefined' ? require = J$.R(NaN, 'require', undefined, true, true) : require = J$.R(NaN, 'require', require, true, true)), false)(J$.T(NaN, 'iflow', 21, false)), uTILs2342ClEAnPC, false, true);\n"

rm -rf /tmp/iterative-tmp
cp $1 /tmp/iterative-tmp -r
TESTS_FOLDER=/tmp/iterative-tmp
VERIFY=0
E2E=0
MAPSOURCE=0
INTERPRETER=./src/js/analysis/LightweightTraceInterpreter.js

if [ $# -eq 0 ];
    then echo "Illegal number of parameters"
    exit 1
fi

while [ "$1" != "" ]; do
    case $1 in
        -i | --interpreter )    shift
                                INTERPRETER=$1
                                ;;
        -v | --verify )         VERIFY=1
                                ;;
        -e2e | --end2end )      E2E=1
                                ;;
        -ms | --mapSource )     MAPSOURCE=1
                                ;;
        -* )                    echo "Wrong option"
                                usage
                                exit 1
    esac
    shift
done

mkdir jalangi_tmp
for test in $TESTS_FOLDER/*
do
    TEST_BASE=$test
    TEST_BASE_ABS=`readlink -f $TEST_BASE`

    # Instrument program files

    cd jalangi_tmp
    for i in ${TEST_BASE_ABS}/program/*
    do
        echo "Instrument $i"
        node $ABS_JALANGI/src/js/instrument/esnstrument.js $i --out $i
        I_FILE=`echo $i | grep -o ^.[^\\.]*`
        sed -i "1s/^/$VAR_DECL/" "${I_FILE}.js"
        node $ANALYSES_HOME_ABS/PCCleaner.js "${I_FILE}.js"
    done


    for i in ${TEST_BASE_ABS}/tests/*
    do
        TEST_FILE=`echo $i | grep -o ^.[^\\.]*`
        TEST_FILE_ABS=`readlink -f $TEST_FILE`
        test_absolute_path=`readlink -f $i`
        echo "Instrument $i"
        node $ABS_JALANGI/src/js/instrument/esnstrument.js $test_absolute_path --out $i
        sed -i "1s/^/$VAR_DECL/" "${TEST_FILE_ABS}.js"
        node $ANALYSES_HOME_ABS/PCCleaner.js "${TEST_FILE_ABS}.js"
    done

    cd ..
done

rm results/traces/*  2> /dev/null
for test in $TESTS_FOLDER/*
do
TEST_BASE=$test
COUNT=1
TEST_BASE_ABS=`readlink -f $TEST_BASE`

rm results/graphs/*  2> /dev/null
updtAdded=1

while [ $updtAdded = 1 ]
do
rm ./jalangi_tmp/trace[0-9]*.json  2> /dev/null
echo "========================================== ITERATION $COUNT =========================================="
rm flows.json  2> /dev/null
updtAdded=0;


for i in ${TEST_BASE_ABS}/tests/*
do
    if [ `echo $i | grep _jalangi_.js` ]
    then
        echo "Skipped"
    else
    printf "\n"
    echo "RUN TEST: $i"
    # Run our analysis using the test file
    TEST_FILE=`echo $i | grep -o ^.[^\\.]*`
    TEST_FILE_ABS=`readlink -f $TEST_FILE`

    test_absolute_path=`readlink -f $i`
    ABS_JALANGI=`readlink -f $JALANGI_HOME`
    ABS_AN_HOME=`readlink -f $ANALYSES_HOME`

    cd jalangi_tmp
    out=`node $ABS_JALANGI/src/js/commands/direct.js --smemory --analysis $ABS_AN_HOME/$ANALYSIS_NAME "${TEST_FILE_ABS}.js"`
    echo -e "$out"

    lines=`echo $out | grep "Violation of Permissive-Upgrade Policy" | wc -l`
    cd ..
    if [ $lines = 1 ]
    then
        updtAdded=1
        COUNT=`expr $COUNT + 1`
        break
    fi
    fi
done

if [ $MAPSOURCE = 1 ]
then
    for trace in ./jalangi_tmp/trace[0-9]*.json
    do
        node ${ANALYSES_HOME}/TraceTransformer.js $trace ./jalangi_tmp/jalangi_sourcemap.json
    done
fi

done

echo ""
echo "Finished executing ${TEST_BASE_ABS}"
echo "$test $COUNT" >> iterations.txt

# Clean temp files
#rm ${TEST_BASE_ABS}/program/*\_jalangi\_*
#rm ${TEST_BASE_ABS}/tests/*\_jalangi\_*


# Aggregate results from JSON files
cat ./jalangi_tmp/trace[0-9]*.json >> ./jalangi_tmp/trace_final.json
rm ./jalangi_tmp/upgrades.json 2> /dev/null
rm ./jalangi_tmp/flows.json  2> /dev/null
cp ./jalangi_tmp/trace1.json ./results/traces/`basename ${TEST_FILE}`
rm ./jalangi_tmp/trace[0-9]*.json  2> /dev/null


done

mv ./jalangi_tmp/trace_final.json ./jalangi_tmp/trace1.json
cat ./jalangi_tmp/trace1.json

node $INTERPRETER ./jalangi_tmp/trace1.json $VERIFY $E2E
#rm ./jalangi_tmp/*
#rmdir ./jalangi_tmp
rm iterations.txt
