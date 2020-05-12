const webPackDevServer=require('webpack-dev-server');
const webpack=require('webpack');
const config=require('./webpack.config');
const options={
    hot:true,
    host:'localhost'
}
webPackDevServer.addDevServerEntrypoints(config,options);
const compiler=webpack(config);
const server=new webPackDevServer(compiler,options);
server.listen(5000,options.host,()=>{
    console.warn('启动成功，请用浏览器打开：http://'+options.host+':'+5000);
});