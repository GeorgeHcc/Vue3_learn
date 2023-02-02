import {ref,watch} from 'vue'
export default function(title='default'){
    // document.title=title;
    let titleRef=ref(title)
    watch(titleRef,(newVal)=>{
        document.title=newVal
    },{
        immediate:'true'
    })
    return titleRef
    
}