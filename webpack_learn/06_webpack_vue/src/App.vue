<template>
    <div class="header">{{ message }}</div>
</template>
<script>
export default{
    data(){
        return{
            message:'this is Vue3 SFC there!'
        }
    },
    methods:{

    }
}
</script>
<style>
.header{
    color:greenyellow;
    width: 100%;
    height:50px;
    text-align: center;
    font-size: 30px;
}
</style>