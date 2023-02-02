import {ref} from 'vue'
export default function(){
    let count=ref(0)
    const increment=()=>count.value++
    const decrement=()=>count.value--

    return{
        count,
        increment,
        decrement
    }
}