<template>
    <div>
        this is Home page,is {{ msgs }} page
    </div>
</template>

<script>
import { ref } from 'vue';

    export default {
        props:{
            msg:{
                type:String,
                required:true,
            }
        },
        /**
         * 
         * @param {*} props 
         * @param {*} context 
         */
        setup(props){
            let msgs=ref(props.msg);
            //使用refAPI时，需要通过value来拿到值
            console.log(msgs.value);
            return{
               msgs
            }
        }
    }
    //yygit
</script>

<style scoped>

</style>