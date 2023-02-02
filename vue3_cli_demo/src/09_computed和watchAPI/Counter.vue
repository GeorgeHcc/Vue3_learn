<template>
    <div id="container">
        <p>当前计数:{{ count }}</p>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <br/>
        <input type="text" placeholder="input a value to set titile" v-model="setTitle"/>
        <div class="wrap">
            <div class="pagex">pageX:{{ pageX }}</div>
            <div class="pageY">pageY:{{ pageY }}</div>

            <div class="scrollx">scrollX:{{ scrollX }}</div>
            <div class="scrollY">scrollY:{{ scrollY }}</div>
        </div>
    </div>
</template>

<script >
// import{ref} from 'vue'
import useTitle from './hooks/useTitle'
import useCounter from './hooks/counter'
import useMouse from './hooks/useMouse'
import useScroll from './hooks/useScrollPosition'
    export default {
        setup(){
            //在社区一般我们把自定义hooks约定使用前缀use命名
            const {count,increment,decrement}=useCounter();
            // let setTitle=ref('default-title')
            let setTitle= useTitle()
            setTimeout(() => {
                setTitle.value='kobe'
            }, 3000);
            const {pageX,pageY}=useMouse()
            const {scrollX,scrollY}=useScroll()
            return{
                count,
                setTitle,
                pageX,
                pageY,
                scrollX,
                scrollY,
                increment,
                decrement
            }
        }
    }
</script>

<style scoped>
#container{
    width:4000px;
    height: 3000px;
}
.wrap{
    position: fixed;
    right: 50px;
    bottom: 50px;
}
</style>