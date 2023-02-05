//自定义插件对象式写法

export default {
    install(app){
        //自定义设置全局属性
        //使用$区别全局属性
      app.config.globalProperties.$name =(fistName,lastName)=>fistName+' '+lastName
    }
}