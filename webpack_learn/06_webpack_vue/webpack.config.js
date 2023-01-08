//webpack�������
const {CleanWebpackPlugin}=require("clean-webpack-plugin")
const HtmlWebpackPlugin=require("html-webpack-plugin")
const {DefinePlugin}=require("webpack")
const{VueLoaderPlugin}=require('vue-loader/dist/index')
module.exports={
    //����ģʽ --options:
    //development:����ģʽ
    //production:����ģʽ����Ŀ������ߵ�ʱ������
    mode:"development",
    //����source-map������jsӳ���ļ���������Դ���ʹ���
    devtool:"source-map",
    module:{
        rules:[
            //webpack5֮ǰ��Դ�����ʹ�÷�ʽ
            //#region 
            // {
            //     test:/\.(jpe?g|png|svg|gif)$/,
            //     //Ĭ��д��
            //     // use:[
            //     //     'file-loader'
            //     // ]

            //     //file-loader����д��
            //     use: {
            //         loader:'file-loader',//С�ļ���ʹ��url-loader ����base64���룬����������ͬ
            //         options:{   //1.����placeholder
            //             //[name]:�ļ���  [hash:������λ��]:ʹ��MD4�㷨���ɵ�ɢ��ֵ����֤�ļ���Ψһ�� [ext]:�ļ���׺��
            //             name:'[name]_[hash:12].[ext]',
            //             //2.����ļ���·��
            //             outputPath:'img',//д��1
            //            // name:'img/[name]_[hash:12].[ext]',//д��2
            //             limit:100*1024 //�����ļ���С С��100KBʱʹ��
            //         }
            //       }
            //  },
            //#endregion

             //webpack5��ʼʹ��asset module type,��������loader
             {
                test:/\.(jpe?g|png|gif|svg)$/,
                type:'asset/resource',
                generator:{
                    filename:'img/[name]_[hash:6][ext]'//webpack5��[ext]������.
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:100*1024//100KB���ڵ��ļ�ʹ��base64��url-loader��ʽ��
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
            template:'./src/index.html',//���ô�����ɵ�html�ļ�ģ��
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