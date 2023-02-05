import { createApp } from 'vue'
import App from './App.vue' 
import registerDirection from './11_自定义指令/Directions'
import objectPlugin from './12_Plugin/objectPlugin'
const app=createApp(App)
//注册全局自定义指令
registerDirection(app)
//使用自定义插件
app.use(objectPlugin)
app.mount('#app')
