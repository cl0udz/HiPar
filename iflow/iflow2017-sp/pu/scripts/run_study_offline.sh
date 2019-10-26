#!/usr/bin/env bash
## to be called from pu directory

VERIFY=0
E2E=0
INTERPRETER=./src/js/analysis/StudyTraceInterpreter.js
RESULTS_FILE=./results.csv
TRACES_DIR=$1

while [ "$1" != "" ]; do
    case $1 in
        -i | --interpreter )    shift
                                INTERPRETER=$1
                                ;;
        -f | --file )           shift
                                RESULTS_FILE=$1
                                ;;
        -e2e | --end2end )      E2E=1
                                ;;
        -* )                    echo "Wrong option"
                                usage
                                exit 1
    esac
    shift
done
 echo "TEST INSTANCE, ITERATIONS, EXPLICIT, OBSERVABLE IMPLICIT, HIDDEN IMPLICIT, E2E EXPLICIT, E2E OBSERVABLE IMPLICIT, E2E HIDDEN IMPLICIT, END-2-END VIOLATIONS, TRACE SIZE, E2E TYPE0, E2E TYPE1, E2E TYPE2, E2E TYPE3, E2E TYPE4, E2E TYPE5, E2E TYPE6, E2E TYPE7, IIDSINK, COUNT, E2E TYPE0, E2E TYPE1, E2E TYPE2, E2E TYPE3, E2E TYPE4, E2E TYPE5, E2E TYPE6, E2E TYPE7" >> ${RESULTS_FILE}

for TEST in $TRACES_DIR/*
do
	if [ -d $TEST ]
	then
    for INSTANCE in $TEST/*
    do	
		echo "Analyzing $INSTANCE"
		OUT=`node ${INTERPRETER} $INSTANCE ${VERIFY} ${E2E}`
		echo -e "${OUT}"
		ITCOUNT=`cat $INSTANCE/iterations.txt`
		echo -e"$INSTANCE, $ITCOUNT, $OUT" >> ${RESULTS_FILE}
	done	
	fi
    
done

