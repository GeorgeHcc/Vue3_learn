

<script >
import {h} from 'vue'
    export default {
        //在vue2.x中h函数是作为render函数的参数，vue3将其抽离了出来，所以需要import
        render(){
            /*
            完整参数签名
            function h(
            type: string | Component,
            props?: object | null,
            children?: Children | Slot | Slots
            ): VNode
            */
            return h('p',{class:'title'},'hello render')
        }
    }
</script>

<style scoped>

</style>