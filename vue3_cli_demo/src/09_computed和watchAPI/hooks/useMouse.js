import {ref} from 'vue'
export default function(){
    let pageX=ref(0)
    let pageY=ref(0)
    window.addEventListener('mousemove',(e)=>{
        pageX.value=e.pageX;
        pageY.value=e.pageY;
    })
    return {pageX,pageY}
}
