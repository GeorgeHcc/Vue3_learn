const path=require('path')
const{CleanWebpackPlugin}=require('clean-webpack-plugin')
module.exports={
    entry:'./src/index',//����ļ�·��
    output:{
        path:path.resolve(__dirname,"dist"),//�����ļ�·��  path.resolve��ȡ��ǰ�ļ��ľ���·��
        filename:'bundle.js'
    },
   
    plugins:[
            new CleanWebpackPlugin()
        ]
    
}