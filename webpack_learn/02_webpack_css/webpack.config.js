module.exports={
    module:{
        rules:[
            //webpack5֮ǰ��Դ�����ʹ�÷�ʽ
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
            }
        ]
    }
}