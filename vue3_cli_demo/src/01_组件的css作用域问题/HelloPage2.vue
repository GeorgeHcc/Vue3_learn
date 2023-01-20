<template>
    <div class="demo">
        <div>hello page2</div>
    </div> 
    <hellopage1 :val="this.val" age="13"></hellopage1>
</template>

<script>
import hellopage1 from './HelloPage1.vue';

export default {
    data(){
        return{
            val:'george'
        }
    },
    components:{hellopage1},
    computed:{

    },
    methods:{

    },
    

    }
</script>

<style scoped>
.demo{
    color:red
}
</style>