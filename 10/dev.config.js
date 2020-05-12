const path=require('path')
const cleanWebpackPlugin=require('clean-webpack-plugin')
const htmlWebpackPlugin=require('html-webpack-plugin')
const extractTextWebpackPlugin=require('extract-text-webpack-plugin')
const dist_pro='dist_pro'
const dist_dev='dist_dev'
module.exports={
    mode:"development",
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,dist_dev)
    },
    module:{
        rules:[
            /*
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                loader:['style-loader','css-loader','less-loader']
            },
            */
            {
                test:/\.css$/,
                use:extractTextWebpackPlugin.exports({
                    fallbak:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test:/\.less$/,
                use:extractTextWebpackPlugin.exports({
                    fallbak:'style-loader',
                    use:['css-loader','less-loader']
                })
            },
            {
                test:/\.{jpg|png|svg}/,
                loader:'file-loader'
            }

        ]
    },
    plugins:[
        new cleanWebpackPlugin(dist_dev),
        new htmlWebpackPlugin({
            template:'./src/index.html',
            title:'开发版本'
        }),
        new extractTextWebpackPlugin('style.css')
    ]
}
