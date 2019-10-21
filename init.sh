rm iflow2017-sp/node_modules/iflow/iflow
rm iflow2017-sp/pu/tests/npm-injections-suite/node_modules/iflow 

ln -s ./node-v5.7.1-linux-x64/lib/node_modules/iflow ./iflow2017-sp/node_modules/iflow
ln -s ./node-v5.7.1-linux-x64/lib/node_modules/iflow ./iflow2017-sp/pu/tests/npm-injections-suite/node_modules/iflow
export PATH=`pwd`/node-v5.7.1-linux-x64/bin:$PATH
