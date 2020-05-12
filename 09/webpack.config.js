var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:"./src/index.js",
    mode:'development',
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'热更新。。。'
        })
    ]
}
