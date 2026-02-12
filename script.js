function createRoses(){
for(let i=0;i<50;i++){
let rose=document.createElement('div');
rose.className='rose';
rose.innerHTML='🌹';
rose.style.left=Math.random()*100+'%';
rose.style.animationDuration=(5+Math.random()*5)+'s';
document.body.appendChild(rose);
}
}
createRoses();

function wrong(){alert('Wrong answer 😘 Try again by opening the link again ❤️');window.location.href='index.html'}

function right1(){alert('Correct ❤️');window.location.href='question2.html'}

function checkChoco(){
let ans=document.getElementById('choco').value.toLowerCase();
if(ans==='mousse'){
powerConfetti();
fireworkShow();
setTimeout(()=>{window.location.href='magic.html'},4000)
}else{
alert('Wrong 😘 Try again from the start ❤️');
window.location.href='index.html'
}
}

function unlockVideo(){
document.getElementById('lockSection').classList.remove('hidden')
}

function showVideo(){
document.getElementById('videoSection').classList.remove('hidden')
}

function powerConfetti(){
for(let i=0;i<600;i++){
let heart=document.createElement('div');
heart.innerHTML='❤️';
heart.style.position='fixed';
heart.style.left=Math.random()*100+'%';
heart.style.top='-20px';
heart.style.fontSize=(15+Math.random()*25)+'px';
document.body.appendChild(heart);
let fall=setInterval(()=>{heart.style.top=parseInt(heart.style.top)+10+'px'},20);
setTimeout(()=>{clearInterval(fall);heart.remove()},5000);
}
}

function fireworkShow(){
for(let i=0;i<20;i++){
setTimeout(()=>{
let boom=document.createElement('div');
boom.innerHTML='💥';
boom.style.position='fixed';
boom.style.left=Math.random()*100+'%';
boom.style.top=Math.random()*80+'%';
boom.style.fontSize='40px';
document.body.appendChild(boom);
setTimeout(()=>{boom.remove()},1000);
},i*300);
}
}
