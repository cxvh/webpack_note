console.log('hello webpack')
/*
全局安装webpack
cnpm i -g webpack webpack-cli
index.js
console.log('hello webpack')
cmd
webpack index.js------>生成文件夹dist，生成文件main.js
警告
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
下面生成方式无警告
webpack index.js --mode development//生成文件比较大
webpack index.js --mode production
*/