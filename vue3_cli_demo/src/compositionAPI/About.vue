<template>
    <div>
        <span>this is About</span>
        <Home :msg="msg"></Home>
    </div>
</template>

<script>
import Home from './Home.vue'
    export default {
        components:{Home},
        data(){
            return{
                msg:'about page'
            }
        }
    }
</script>

<style scoped>

</style>