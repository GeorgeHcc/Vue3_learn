
function createApp(rootComponent){
    return {
        mount(selector){
            const container=document.querySelector(selector);
            let isMounted=false;
            let oldNode=null;
         
            watchEffect(function(){
                if(!isMounted){
                    oldNode=rootComponent.render()
                    mount(rootComponent.render(),container);
                    isMounted=true;
                }else{ 
                    const newNode=rootComponent.render();
                    patch(newNode,oldNode);
                    oldNode=newNode;
                }
            })
        }
    }
}