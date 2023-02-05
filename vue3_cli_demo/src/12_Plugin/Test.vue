<template>
    <div>
        <span>this is custom Plugin test!</span>
        <div>{{ getFullName }}</div>
    </div>
</template>

<script setup>
import { ref,getCurrentInstance } from 'vue';
    
            let firstName=ref('George');
            let lastName=ref('Huang')
            const curinstance=getCurrentInstance()
           // console.log(curinstance.$name);//undefined
            // console.log(curinstance.appContext.config.globalProperties.$name)
            const getFullName=curinstance.appContext.config.globalProperties.$name(firstName,lastName)
       
</script>

<style scoped>

</style>