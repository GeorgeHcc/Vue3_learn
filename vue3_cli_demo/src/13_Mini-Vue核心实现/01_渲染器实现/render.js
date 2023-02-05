

const h=(tag,props,children)=>{
    //vNode->javascript 对象
    return{
        tag,
        props,
        children
    }
}
const mount=(vNode,container)=>{
    //创建真实DOM
    const el=vNode.el=document.createElement(vNode.tag)
   
    //设置属性
    if(vNode.props){
        for(const key in vNode.props){
            const value=vNode.props[key]
            el.setAttribute(key,value)
        }
    }
    //
    if(typeof vNode.children==='object'){
        vNode.children.forEach((e)=>{
            mount(e,el)
        })
    }else{
        el.innerText=vNode.children
    }
    
    container.appendChild(el)
 
}