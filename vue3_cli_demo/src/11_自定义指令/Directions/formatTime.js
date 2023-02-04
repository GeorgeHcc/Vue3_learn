import dayjs from "dayjs";
export default function (app){
    app.directive('format-time',{
        
        created(el,bindings){
            //if(el.innerText.length==10)el.innerText+='000'
           
            console.log('created:',el.innerText,bindings);
        },
        mounted(el,bindings) {
            let timestamp=el.innerText 
            //默认格式
            if(!bindings.value)bindings.value='YYYY-MM-DD HH:mm:ss'
            //时间戳类型判断
           el.innerText= typeof timestamp==='number'?
            dayjs( timestamp).format(bindings.value):
            dayjs( parseInt(timestamp)).format(bindings.value)
            console.log('mounted:',el,bindings);
        },
    })
}