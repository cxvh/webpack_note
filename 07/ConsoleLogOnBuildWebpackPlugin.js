const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    console.log(231,1)
    compiler.hooks.run.tap(pluginName, compilation => {
      //console.log('webpack 构建过程开始！');
      console.log('11111111111'+2222222)
    });
  }
}
module.exports=ConsoleLogOnBuildWebpackPlugin;