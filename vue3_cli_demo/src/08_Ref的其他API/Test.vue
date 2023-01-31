<template>
    <div>
        <span>{{person.name }}-{{ person.age }}</span>
        <button @click="changeAge">click to add age!</button><br/>
        <span>防抖节流：</span>
        <input type="text" v-model="search" placeholder="请输入"/><br/>
        <span>输入的内容:{{ search }}</span>
    </div>
</template>

<script >
import { toRefs,reactive } from "vue";
import useDebounce from './hooks/useDebounce'
    export default {
        setup(){
            const person=reactive({name:'georgeH',age:23});
            //const {name,age}=
            //将reactive中对象的所有属性转换为Ref对象
            let {name,age}=toRefs(person)
            //将reactive中的对象的一个属性转换成Ref对象
            //let age=toRef(person,"age")
           const changeAge=()=>{
            age.value++;
            console.log(age.value);
            }
            let search=null;
             search=useDebounce(search)
            return{
                person,
                name,
                age,
                search,
                changeAge
            }
        }
    

    }
</script>

<style scoped>

</style>