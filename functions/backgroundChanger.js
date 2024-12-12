// backgrond changer 
let div =document.getElementsByClassName('box')[0];


//chnage color and text of paragraph
let btn1=document.getElementsByTagName('button')[0];
let btn2=document.getElementsByTagName('button')[1];
let btn3=document.getElementsByTagName('button')[2];
let btn4=document.getElementsByTagName('button')[3];
let btn5=document.getElementsByTagName('button')[4];
let para=document.getElementsByTagName('p')[0];
//first   button  for red color
btn1.addEventListener('click',()=>{
    para.style.color='red';
    para.innerHTML='red';
    div.style.background='red';
});
//second   button  for yellow color
btn2.addEventListener('click',()=>{
    para.style.color='yellow';
    para.innerHTML='yellow';
    div.style.background='yellow';
});
//third   button  for blue color
btn3.addEventListener('click',()=>{
    para.style.color='blue';
    para.innerHTML='blue';
    div.style.background='blue';
});
btn4.addEventListener('click',()=>{
    para.style.color='green';
    para.innerHTML='green';
    div.style.background='green';

});
btn5.addEventListener('click',()=>{
    para.style.color='black';
    para.innerHTML='black';
    div.style.background='black';
});





