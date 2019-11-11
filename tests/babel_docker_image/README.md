# To pull the docker image
`docker pull ex1tt/nodejs-babel7`

# To use babel
`docker run --rm -it ex1tt/nodejs-babel7 babel --version`

# To transfer all js files to es5 in current dir (\`pwd\`)
```docker run --rm -v `pwd`:/target  -it ex1tt/nodejs-babel7 babel /target --out-dir /target --copyfiles --presets=@babel/preset-env```