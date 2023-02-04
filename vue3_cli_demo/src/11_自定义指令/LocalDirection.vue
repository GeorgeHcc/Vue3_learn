<template>
    <div>
        <input type="text" :placeholder="msg">
    </div>
</template>

<script>
import {ref} from 'vue'
    export default {
        setup(){
            let msg=ref('auto-focus input')
            return {
                msg
            }
        },
        directives:{
            vFocus:{
                mounted(el,bindings,vNode,preVnode) {
                    el.focus()
                    console.log(el,bindings,vNode,preVnode);
                },
            }
        }
    }
</script>

<style scoped>

</style>