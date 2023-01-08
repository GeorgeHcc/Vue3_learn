import '../css/element.less'
import '../css/bg.css'
import imgFile from '../img/hyn.png'
const divEl=document.createElement('div');
const imgEl=document.createElement('img')
const bgDiv=document.createElement('div')
imgEl.className='img'
imgEl.src=imgFile
bgDiv.className='img-bg'
divEl.className='title';
divEl.innerText='Hello Word'
document.body.appendChild(imgEl)
document.body.appendChild(divEl)
document.body.appendChild(bgDiv)
