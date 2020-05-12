const path=require('path')
module.exports={
    entry:{
        test:'./src/index.js',
        demo:'./src/main.js'
    },
    mode:'development',
    output:{
        //hash指定6位
        filename:'[name]_[hash:6]_bundle.js',
        path:path.join(__dirname,'lib'),
        //生成文件：test_6ae182_bundle.js demo_6ae182_bundle.js,
        /*
静态资源准备放到cdn时候，需要加上前缀，就用publicPath
        */
        //publicPath:'http://cdn.baidu.com/assets'
    }
}