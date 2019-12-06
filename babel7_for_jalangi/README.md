# babel7_for_jalangi
a docker of bebel7 cli with configs for jalangi

# To pull docker image
`docker pull ex1tt/babel7_for_jalangi`

# To build docker image
`docker build -t ex1tt/babel7_for_jalangi .`
# To use babel
`docker run --rm -it ex1tt/nodejs-babel7 babel --version`

# To transfer all js files to es5 in current dir (\`pwd\`)
1. cd 到想转换babel的目录
2. 输入命令,将当前目录(递归到子目录)的所有js文件进行babel转换:  
   - 对新函数进行兼容:  
   ```docker run --rm -v `pwd`:/target  -it ex1tt/babel7_for_jalangi babel /target --out-dir /target --copy-files```
   - 只转换语法，不用兼容新函数:  
     ```docker run --rm -v `pwd`:/target  -it ex1tt/babel7_for_jalangi babel /target --out-dir /target --no-babelrc --presets=@babel/preset-env --copy-files```
 
