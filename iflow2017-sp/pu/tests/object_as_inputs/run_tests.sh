rm resources/sink-values.txt
rm resources/out.txt
sudo ./node_modules/n/bin/n 5.7.1
node ./TestsNode5.7.1.js
sudo ./node_modules/n/bin/n 0.10.47
node ./TestsNode0.10.47.js
echo "Tests finished: check out resources/out.txt and resources/sink-values.txt"
