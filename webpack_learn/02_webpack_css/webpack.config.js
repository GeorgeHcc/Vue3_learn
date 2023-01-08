module.exports={
    module:{
        rules:[
            //webpack5之前资源打包的使用方式
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
            }
        ]
    }
}