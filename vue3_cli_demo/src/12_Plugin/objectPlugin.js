//自定义插件对象式写法

export default {
    install(app){
        //自定义设置全局属性
        //使用$区别全局属性
      app.config.globalProperties.$name =(fistName,lastName)=>{
       fistName= typeof fistName==='object'?fistName.value:fistName
       lastName= typeof lastName==='object'?lastName.value:lastName
        return fistName+' '+lastName
      }
        //ref响应式对象
      app.config.globalProperties.$year='2023'
    }
}