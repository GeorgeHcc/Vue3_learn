<template>
    <div class="container">
        <div class="left">
            this is left
            <slot name="left"></slot>
        </div>
        <div class="content">
            this is content
            <slot :name="name"></slot>
        </div>
        <div class="right">
            this is right
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script >
    export default {
        data(){
            return{
                name:'content'
            }
        }
    }
</script>

<style  scoped>
.container{
    padding: 0;
    margin: 0;
    width:700px;
    box-sizing: border-box;
    height:150px;
    display: flex;
    border:1px black solid;
    
}
.left {
    width:200px;
    border:1px black solid;
    text-align: center;
}
.right{
    width:200px;
    border:1px black solid;
    text-align: center;
}
.content{
width:300px;
border:1px black solid;

text-align: center;
}
</style>