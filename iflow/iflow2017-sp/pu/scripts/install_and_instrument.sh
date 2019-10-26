#!/usr/bin/env bash
## to be called from pu directory

JALANGI_HOME=../jalangi
ANALYSES_HOME=src/js/analysis/
ABS_JALANGI=`readlink -f ${JALANGI_HOME}`
ANALYSES_HOME_ABS=`readlink -f $ANALYSES_HOME`
TEST_UTILS=/home/cristian/sola/cased-repository/ec-spride-sola-projects-study-bnt-flows/pu/tests/TestUtils.js
MODULE_NAME=$1

npm install --prefix . $MODULE_NAME
mkdir jalangi_tmp

for file in $(find ./node_modules/$MODULE_NAME/ -type f);
do
    if [ `echo "$file" | grep '\.js$'` ]
    then
        test_absolute_path=`readlink -f $file`
        TEST_FILE=`echo $file | grep -o ^.[^\\.]*`
        TEST_FILE_ABS=`readlink -f $TEST_FILE`
        cd jalangi_tmp

        content=$(cat $test_absolute_path) # no cat abuse this time
        echo -en "var utils = require('$TEST_UTILS');\n" | cat - $test_absolute_path > /tmp/out && mv /tmp/out $test_absolute_path
        echo "Instrumenting"
        node $ABS_JALANGI/src/js/instrument/esnstrument.js $test_absolute_path
        node $ANALYSES_HOME_ABS/PCCleaner.js "${TEST_FILE_ABS}_jalangi_.js"
        cd ..
    fi
done

# check if this is not too restrictive
sed -i -- 's/\.js/_jalangi_\.js/g' ./node_modules/$MODULE_NAME/package.json