<template>
    <div>
        <button @click="foo" type="button">按钮</button>
        <span>{{ msg }}-{{ newMsg }}</span>
    </div>
</template>

<script>
import {demoMixin} from '../Mixins/demoMixin'
    export default {
       mixins:[demoMixin],
       data(){
        return {
            newMsg:'Hello page'
        }
       },
       methods:{
        foo(){console.log('foo is run');}
       }
    }
</script>

<style scoped>

</style>