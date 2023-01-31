<template>
    <div>
        <p>{{ fullName }}</p>
        <p>{{person.name }}-{{ person.age }}</p>
        <br/>
        <button @click="changeAge">click to add age</button>
    </div>
</template>

<script >
import{computed,ref,reactive,watchEffect} from 'vue'
    export default {
        setup(){
            let firstName=ref('George');
            let lastName=ref('Huang');
            let fullName=computed({
                get:()=>firstName.value+' '+lastName.value,
                set(val){
                    return val
                }
            })
            const person=reactive({name:'george',age:23})
            const changeAge=()=>person.age++
            //watchEffect的用法
            watchEffect(()=>{
                console.log(person.age);
            },{deep:true})
            return{
                fullName,
                person,
                changeAge
            }

        }

    }
</script>

<style scoped>

</style>