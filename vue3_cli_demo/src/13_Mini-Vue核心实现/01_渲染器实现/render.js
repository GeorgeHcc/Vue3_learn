/**
 * 实现Vue中通过虚拟DOM解决DOM更新
 * @param {标签} tag 
 * @param {属性} props 
 * @param {子节点} children 
 * @returns 
 */
const h=(tag,props,children)=>{
    //vNode->javascript 对象
    return{
        tag,
        props,
        children
    }
}

/**
 * 渲染真实DOM挂载
 * @param {object} vNode 
 * @param {HtmlElement} container 
 */
const mount=(vNode,container)=>{
    //创建真实DOM
    const el=vNode.el=document.createElement(vNode.tag)
    //设置属性
    if(vNode.props){
        for(const key in vNode.props){
            const value=vNode.props[key]
            if(key.startsWith('on')){//对事件监听进行判断
                el.addEventListener(key.slice(2).toLowerCase(),value)
            }
            el.setAttribute(key,value)
        }
    }
    //处理子节点
    if(typeof vNode.children==='object'){
        vNode.children.forEach((e)=>{
            mount(e,el)
        })
       
    }else{//没有子节点
        el.innerText=vNode.children
    }
     container.appendChild(el)
 
}


/**
 * 对比vnode
 * @param {vNode[object]} newNode 
 * @param {vNode[object]} oldNode 
 */
const patch=(newNode,oldNode)=>{
    if(oldNode.tag!==newNode.tag){
        const parentEl=oldNode.el.parentElement
        parentEl.removeChild(oldNode)
        mount(newNode,parentEl)
      }else{
        //取出element对象，保存在新结点中
        const el=newNode.el=oldNode.el
        //2处理props
        const oldPros=oldNode.props || {}
        const newProps=newNode.props ||{}
        //获取newProps 添加到el上
        for(const key in newProps){
            const oldValue=oldPros[key]
            const newValue=newProps[key]
            if(oldValue!==newValue){
                el.setAttribute(key,newValue)
            }
        }
        //删除旧结点
        for(const key in oldPros){
            if(!(key in newProps)){
                el.removeAttribute(key)
            }
        }
        //3.处理child
        const oldChild=oldNode.children || []
        const newChild=newNode.children || []
        if(typeof newChild==='string'){
           if(typeof oldChild==='string'){
               if(newChild!==oldChild){
                  el.innerText=newChild
                 }
            }else{el.innerText=newChild}
        }else{
           if(typeof oldChild==='string'){
              newChild.forEach((e)=>{
                mount(e,el)
              })
            }
            else{//都有子节点的情况
            //1.前面有相同结点的元素进行patch操作
            const commLen=Math.min(oldChild.length,newChild.length)    
                for(let i=0;i<commLen;i++){
                    patch(newChild[i],oldChild[i])
                }
            //2.newChild.length > oldChild.length
            if(newChild.length > oldChild.length)
                newChild.slice(oldChild.length).forEach(e=>mount(e,el))
            //3.newChild.length < oldChild.length
            if(newChild.length < oldChild.length)
                oldChild.slice(newChild.length).forEach(e=>el.removeChild(e.el))
            }
        }
    }
}
