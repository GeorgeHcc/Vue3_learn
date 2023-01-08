import '../css/element.less'
import imgFile from '../img/hyn.png'

const divEl=document.createElement('div');
//console.log(`dom:${divEl}`);

divEl.className='title';
divEl.innerText='Hello Word'

const imgEl=document.createElement('img')
imgEl.src=imgFile
imgEl.className='img-box'
divEl.appendChild(imgEl)
document.body.appendChild(divEl)

