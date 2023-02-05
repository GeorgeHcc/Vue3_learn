<template>
    <div>
        <span>this is custom Plugin test!</span>
        <div>{{ getFullName+year }}</div>
    </div>
</template>

<script setup>
import { ref,getCurrentInstance } from 'vue';
    
            let firstName=ref('George');
            let lastName=ref('Huang')
            const curinstance=getCurrentInstance()
           // console.log(curinstance.$year);//undefined
           console.log(curinstance)
            console.log(curinstance.appContext.config.globalProperties.$year)//2023
            const getFullName=curinstance.appContext.config.
            globalProperties.$name(firstName,lastName)//[object Object] [object Object]  
            // const getFullName=curinstance.appContext.config.globalProperties.$name('ddd','ccc')//ddd ccc   
            let year=curinstance.appContext.config.globalProperties.$year
       
</script>

<style scoped>

</style>