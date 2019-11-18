# babel7_for_jalangi
a docker of bebel7 cli with configs for jalangi

# To pull docker image
`docker pull ex1tt/babel7_for_jalangi`

# To build docker image
`docker build -t ex1tt/babel7_for_jalangi .`
# To use babel
`docker run --rm -it ex1tt/nodejs-babel7 babel --version`

# To transfer all js files to es5 in current dir (\`pwd\`)
```docker run --rm -v `pwd`:/target  -it ex1tt/babel7_for_jalangi babel /target --out-dir /target --copyfiles```