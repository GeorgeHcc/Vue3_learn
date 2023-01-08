const path=require('path')
const{CleanWebpackPlugin}=require('clean-webpack-plugin')
module.exports={
    entry:'./src/index',//入口文件路径
    output:{
        path:path.resolve(__dirname,"dist"),//出口文件路径  path.resolve获取当前文件的绝对路径
        filename:'bundle.js'
    },
   
    plugins:[
            new CleanWebpackPlugin()
        ]
    
}