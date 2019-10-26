#!/usr/bin/env bash
## to be called from ec-spride-sola-projects-study-bnt-flows/pu directory

JALANGI_HOME=../jalangi
ABS_JALANGI=`readlink -f $JALANGI_HOME`
ANALYSES_HOME=src/js/analysis/
ANALYSIS_NAME="WrappedPrimitivesFlowAnalysis.js"
ANALYSES_HOME_ABS=`readlink -f $ANALYSES_HOME`
SUITE_PATH=tests/basicTests

VAR_DECL="J$.N(NaN, 'uTILs2342ClEAnPC', uTILs2342ClEAnPC, false, false, false);J$.N(NaN, 'uTILs2342ClEAnPC', uTILs2342ClEAnPC, false, false, false); var uTILs2342ClEAnPC = J$.W(NaN, 'uTILs2342ClEAnPC', J$.F(NaN, J$.I(typeof require === 'undefined' ? require = J$.R(NaN, 'require', undefined, true, true) : require = J$.R(NaN, 'require', require, true, true)), false)(J$.T(NaN, 'iflow', 21, false)), uTILs2342ClEAnPC, false, true);\n"

red=$(tput setaf 1)
green=$(tput setaf 2)
normal=$(tput sgr0)

if test "$1" != ""
then
    echo "Run only one test: $1"
    # Run our analysis using the test file
    TEST_FILE=`echo $1 | grep -o ^.[^\\.]*`
    # python $JALANGI_HOME/scripts/jalangi.py direct -a $ANALYSES_HOME/$ANALYSIS_NAME $TEST_FILE
    TEST_FILE_ABS=`readlink -f $TEST_FILE`
    mkdir jalangi_tmp
    cd jalangi_tmp
    node $ABS_JALANGI/src/js/instrument/esnstrument.js ${TEST_FILE_ABS}.js
    sed -i "1s/^/$VAR_DECL/" "${TEST_FILE_ABS}_jalangi_.js"
    node $ANALYSES_HOME_ABS/PCCleaner.js "${TEST_FILE_ABS}_jalangi_.js" > /dev/null
    node $ABS_JALANGI/src/js/commands/direct.js --smemory --analysis $ANALYSES_HOME_ABS/$ANALYSIS_NAME "${TEST_FILE_ABS}_jalangi_.js"
    cd ..

    test_absolute_path=`readlink -f $1`
    initial_dir=`readlink -f .`


    # Clean temp files
    cd $initial_dir
    rm $SUITE_PATH/*\_jalangi\_*
    rm ./jalangi_tmp/*
    rmdir ./jalangi_tmp

    exit
fi

printf "%85s %20s\n" "${normal}$test" "OUR APPROACH"
for test in $SUITE_PATH/*
do
  if test `echo $test | grep "TestUtils" | wc -l` = 0
    then
    FLOW_ERROR=0
    if test `cat $test | grep 'VIOLATION' | wc -l` = 1
    then
        FLOW_ERROR=1
    fi

    POLICY_ERROR=0
    if test `cat $test | grep 'PermUpViol' | wc -l` = 1
    then
        POLICY_ERROR=1
    fi

    # Run our analysis using the test file
    TEST_FILE=`echo $test | grep -o ^.[^\\.]*`
    #OUT=`python $JALANGI_HOME/scripts/jalangi.py direct -a $ANALYSES_HOME/$ANALYSIS_NAME $TEST_FILE`
    TEST_FILE_ABS=`readlink -f $TEST_FILE`

    mkdir jalangi_tmp
    cd jalangi_tmp
    node $ABS_JALANGI/src/js/instrument/esnstrument.js ${TEST_FILE_ABS}.js
    sed -i "1s/^/$VAR_DECL/" "${TEST_FILE_ABS}_jalangi_.js"
    node $ANALYSES_HOME_ABS/PCCleaner.js "${TEST_FILE_ABS}_jalangi_.js" > /dev/null
    OUT=`node $ABS_JALANGI/src/js/commands/direct.js --smemory --analysis $ANALYSES_HOME_ABS/$ANALYSIS_NAME "${TEST_FILE_ABS}_jalangi_.js"`
    cd ..

    POLICY_VIOL_DET=0
    if test `echo $OUT | grep 'Violation of Permissive-Upgrade Policy' | wc -l` = 1
    then
        POLICY_VIOL_DET=1
    fi

    continue=0
    if test $POLICY_ERROR = 1
    then
        if test $POLICY_VIOL_DET = 1
        then
            OUR_RESULT="${green}PASSED${normal}"
            continue=1
        else
            OUR_RESULT="${red}FAILED${normal}"
        fi
    else
        if test $POLICY_VIOL_DET = 1
        then
            OUR_RESULT="${red}FAILED${normal}"
        else
            OUR_RESULT="${green}PASSED${normal}"
            continue=1
        fi
    fi
    if test $continue = 1
    then
        if test `echo $OUT | grep "Information flow VIOLATION DETECTED!" | wc -l` = 1
        then
            if test $FLOW_ERROR = 1
            then
            OUR_RESULT="${green}PASSED${normal}"
            else
            OUR_RESULT="${red}FAILED${normal}"
            fi
        else
            if test $FLOW_ERROR = 1
            then
            OUR_RESULT="${red}FAILED${normal}"
            else
            OUR_RESULT="${green}PASSED${normal}"
            fi
        fi
    fi
    printf "%85s %30s\n" "${normal}$test" "$OUR_RESULT"

    # Clean temp files
    rm $SUITE_PATH/*\_jalangi\_*
    rm ./jalangi_tmp/*
    rmdir ./jalangi_tmp
    rm ./upgrades.json 2> /dev/null
    fi
done
rm ./flows.json