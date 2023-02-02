import {ref} from 'vue'
export default function(){
    let scrollX=ref(0)
    let scrollY=ref(0)
    window.addEventListener('scroll',()=>{
        scrollX.value=window.scrollX;
        scrollY.value=window.scrollY;
    })
    return {scrollX,scrollY}
}
