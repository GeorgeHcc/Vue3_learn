<template>
    <div>
        <div class="container">
            <NavBar>
                <template #left>
                     <span>Left</span>
                </template>
                <template #content>
                    <div>Content</div>
                </template>
                <template #right>
                    <div>right</div>
                </template>
            </NavBar>
        </div>
    </div>
</template>

<script >
import NavBar from './NavBar.vue'
    export default {
        data(){
            return{
                name:'right'
            }
        },
        components:{NavBar}
    }
</script>

<style scoped>

</style>