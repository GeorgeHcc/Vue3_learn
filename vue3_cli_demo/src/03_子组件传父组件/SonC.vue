<template>
    <div>

    </div>
</template>

<script >
    export default {
       // emits:['add','sub']
       emits:{
        add:null,//没有参数
        sub:(f,s)=>{//有参数
            if(f<0&&s>0)return false;//参数验证
            else return true;
        }
       },
       methods:{
        addc(){
            this.$emit('add')
            this.$emit('sub',1,2)
        }
       }
    }
</script>

<style scoped>

</style>