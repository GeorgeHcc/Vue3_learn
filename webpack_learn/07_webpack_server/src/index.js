import{sum} from './js/math'
const {format}=require('./js/format');
import './js/crtstyle'
import App from './App.vue'
import {createApp} from 'vue/dist/vue.esm-bundler'
const myApp=createApp(App)
myApp.mount('#app')


console.log(sum(3,8));
console.log(format);
console.log(1231231)