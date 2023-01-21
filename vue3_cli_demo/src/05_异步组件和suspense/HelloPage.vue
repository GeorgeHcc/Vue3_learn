<template>
    <div>
        <span>this is hello page</span>
        <Suspense>
           
            <template #default>
                <span>
                    <MyAsyncComp/>
                </span>
            </template>
             <template #fallback>
                <span>Loading ....</span>
            </template>
        </Suspense>
    </div>
</template>

<script>
//异步组件的使用：
//异步组件会被webpack分包打包，我们在vue中写的所有逻辑代码会打包到app.js中
//而使用异步组件会被打包到chunk.js中，可以提升首屏渲染速度。
//defineAsyncComponent一般搭配Vue中的内置组件suspense使用  
import { defineAsyncComponent } from 'vue';
const MyAsyncComp=defineAsyncComponent(()=>import('./AsyncComp.vue'))
    export default {
        components:{MyAsyncComp}
    }
</script>

<style scoped>

</style>