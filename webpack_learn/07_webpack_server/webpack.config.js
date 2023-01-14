const path=require('path')
//webpack插件依赖
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {DefinePlugin} = require("webpack");
const{VueLoaderPlugin} = require('vue-loader/dist/index');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports={
    target:"web",   //表示为什么环境打包

    //设置模式 --options:
    //development:开发模式
    //production:生产模式，项目打包上线的时候设置
    mode:"development",
    //设置source-map，建立js映射文件，方便调试代码和错误
    devtool:"source-map",
    //设置监听模式（一般不用这种，使用dev-server方式较多）
   // watch:true,

    output:{
        path:path.resolve(__dirname,"dist"),//出口文件路径  path.resolve获取当前文件的绝对路径
        filename:'js/main.js'
    },
    devServer:{
       // contentBase:'./public', 新版已经移除这个属性，改为static
        static:'./public',//如果某些资源没有从webpack加载/打包到，就会从这个目录里面去寻找
        hot:true,//模块热替换（HMR）是指在 应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个页面；只更新修改的模块（文件）
        port:9999,//
        open:true,//解析完后自动打开浏览器
        compress:true,//是否开启压缩（将文件及资源压缩为gzip在网络中传输，提升传输速率，浏览器会自动解压gzip）
        proxy:{
            '/api':{
                target:'http://loacalhost:8090',
                PATHRewrite:{
                    '^/api':''//重写
                }
            }
        }      
    },
    resolve:{
        extension:['.js','.vue','.mjs','.ts','.jsx','.tsx','.json'],//自动补齐文件后缀名
        alias:{       //别名
            '@':path.resolve(__dirname,'./src')
        }
    },
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
        new CopyWebpackPlugin({
            patterns:[{
                from:'public',//如果我们将一些文件放到public的目录下，那么这个目录会被复制到dist文件夹中。
                globOptions:{
                    ignore:[
                        '**/index.html'
                    ]
                }
            }]
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html',//配置打包生成的html文件模板
            title:'GeorgeH',
        }),
        new DefinePlugin({
            BASE_URL:"'./'",
            __VUE_OPTIONS_API:true,
            __VUE_PROD_DEVTOOLS:false
        }),
        new VueLoaderPlugin()
        
    ]
}