//webpack插件依赖
const {CleanWebpackPlugin}=require("clean-webpack-plugin")
const HtmlWebpackPlugin=require("html-webpack-plugin")
const {DefinePlugin}=require("webpack")
const{VueLoaderPlugin}=require('vue-loader/dist/index')
module.exports={
    //设置模式 --options:
    //development:开发模式
    //production:生产模式，项目打包上线的时候设置
    mode:"development",
    //设置source-map，建立js映射文件，方便调试代码和错误
    devtool:"source-map",
    module:{
        rules:[
            //webpack5之前资源打包的使用方式
            //#region 
            // {
            //     test:/\.(jpe?g|png|svg|gif)$/,
            //     //默认写法
            //     // use:[
            //     //     'file-loader'
            //     // ]

            //     //file-loader配置写法
            //     use: {
            //         loader:'file-loader',//小文件可使用url-loader 进行base64编码，以下配置相同
            //         options:{   //1.配置placeholder
            //             //[name]:文件名  [hash:保留的位数]:使用MD4算法生成的散列值，保证文件的唯一性 [ext]:文件后缀名
            //             name:'[name]_[hash:12].[ext]',
            //             //2.输出文件的路径
            //             outputPath:'img',//写法1
            //            // name:'img/[name]_[hash:12].[ext]',//写法2
            //             limit:100*1024 //限制文件大小 小于100KB时使用
            //         }
            //       }
            //  },
            //#endregion

             //webpack5开始使用asset module type,不再下载loader
             {
                test:/\.(jpe?g|png|gif|svg)$/,
                type:'asset/resource',
                generator:{
                    filename:'img/[name]_[hash:6][ext]'//webpack5的[ext]包含了.
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:100*1024//100KB以内的文件使用base64（url-loader方式）
                    }
                }
             },

            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',//配置打包生成的html文件模板
            title:'vue-webpack',
        }),
        new DefinePlugin({
            BASE_URL:"'./'",
            
            __VUE_OPTIONS_API:true,
            __VUE_PROD_DEVTOOLS:false
        }),
        new VueLoaderPlugin()
        
    ]
}