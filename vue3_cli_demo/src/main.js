import { createApp } from 'vue'
import App from './App.vue' 
import registerDirection from './11_自定义指令/Directions'

const app=createApp(App)
//注册全局自定义指令
registerDirection(app)
app.mount('#app')
