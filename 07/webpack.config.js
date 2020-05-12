const ConsoleLogOnBuildWebpackPlugin=require("./ConsoleLogOnBuildWebpackPlugin");
module.expors={
    mode:'development',
    plugins:[
        new ConsoleLogOnBuildWebpackPlugin()
    ]
}