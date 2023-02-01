<template>
    <div>
        <div >hello page1 {{ this.name }}{{ $attrs.age }}</div>
    </div>
</template>

<script>
    export default {
        /**
         * 如果不希望非props的属性继承在根节点上使用inheritAttrs，
         * 注意：如果有多个根节点且使用inheritAttrs的时候必须手动指定绑定在哪一个元素上，否找会报错
         * 使用$attrs可以获取所有非props传值
         */
        // inheritAttrs:false,
        name:'hello-page1',
        data(){
            return{
                name:this.val
            }
        },
        props:[
            'val'
        ]
    }
</script>

<style lang="scss" scoped>

</style>