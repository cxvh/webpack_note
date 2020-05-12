var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports={
    entry:{
        index:"./src/index.js"
    },
    module:{
        rules:[
            //{test:/.css$/,use:['style-loader','css-loader']},
            //抽取，和下面ExtractTextWebpackPlugin对应
            {test:/.css$/,use:ExtractTextWebpackPlugin.extract({
                fallback:'style-loader',
                use:'css-loader'
            })},

            //{test:/.less$/,use:['style-loader','css-loader','less-loader']}
            {test:/.less$/,use:ExtractTextWebpackPlugin.extract({
                fallback:'style-loader',
                use:['css-loader','less-loader']
            })}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/demo.html'
        }),
        new ExtractTextWebpackPlugin("my.css")//输出的文件名
    ]
}