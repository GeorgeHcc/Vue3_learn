
//#region  Vue响应式的实现
/**
 * 为什么Vue3使用proxy？
 * defineproperty劫持的是对象的属性，如果新增元素会再次调用defineproperty，
 * 而proxy劫持的是整个对象，不需要做特殊处理Object。
 * 缺点：不兼容IE，也没有polyfill
 */

//#endregion

class Dep{
    constructor(){
        this.subscribers=new Set()
    }
    addEffect(effect){
        this.subscribers.add(effect)
    }
    depend(){
        if(activeEffect){
            this.addEffect(activeEffect)
        }
    }
    notify(){
        this.subscribers.forEach(effect=>{
            effect()
        })
    }
}
let activeEffect=null;
function watchEffect(effect){
    // dep.addEffect(effect)
    activeEffect=effect
    effect()
    activeEffect=null
}
/**
 * Map({key:value}) key必须是字符串
 * WeakMap({key:value})key是一个对象，弱引用
 */
let targetMap=new WeakMap()
function getDep(target,key){
    //1.根据target对象取出对应的Map对象
    let depsMap=targetMap.get(target)
    if(!depsMap){
        depsMap=new Map();
        targetMap.set(target,depsMap)
    }
    //2.取出具体的dep对象
    let dep=depsMap.get(key)
    if(!dep){
        dep=new Dep();
        depsMap.set(key,dep);
    }
    return dep;

}
//vue2对raw进行数据劫持
function reactive(raw){
    Object.keys(raw).forEach(key=>{
        const dep=getDep(raw,key)
        let value=raw[key]
        Object.defineProperty(raw,key,{
            get(){
                dep.depend()
                return value
            },
            set(newVal){
               if(value!==newVal){
                value=newVal;
                dep.notify();
               }
            }
        })

    })
    return raw;
}

//测试代码
// const dep=new Dep()
const info=reactive({counter:100,name:'georgeH'});
const foo=reactive({height:300})

watchEffect(function doubleCounter(){
    console.log('effect1:',info.counter*2);
})

watchEffect(function powerCounter(){
    console.log('effect2:',info.counter**2);
})

watchEffect(function powerCounter(){
    console.log('effect3:',foo.height);
})

info.counter++;
info.name='kobe'
foo.height=100
