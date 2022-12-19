

function getNewColor(){
var cl=document.getElementsByClassName('main');
cl[0].style.background='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
}