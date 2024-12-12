// const readline = require("readline-sync");
// import readline from 'readline-sync';
// controle Statement   if

// if(conditon){
//     // code
// }

// let age=17;//votar age
// let fixedAge=6; //age vottinfg
// console.log(x==y);
// if(age>=18){
//     console.log("you can vote ");
// }

// let a=2;
// b=5;
// if(a>0){
//     console.log("a is positive");
//     console.log(b*a);
// }

// even numbers
// let num=88345678358345044043834731023824739818;
// if(num%2==0){
//     console.log("even number");
// }

// let num=991245382423649;
// if(num%2!==0){
//     console.log("odd number");
// }

// controle Statement if else 

// Syntax
// if(condition){
//     //code to be executed if condition is true
// }else{
//     //code to be executed if condition is false
// }

// let age  =0;

//     if(age>=18){
//         console.log("you can vote");
//     }
//     else{
//         console.log("you can't vote");
//     }

// let num=0;
// if(num>=0){
//     console.log("num is positive");
//     console.log(num*3);
// }else{
//     console.log("num is nagative");
// }

// even or odd Number 

// const userInput = parseInt(prompt("Please enter your number:"));// for browser


// let num = Number(readline.question("Enter your number : ")); //for node js 
// if(num%2==0){
//     console.log("even number");
// }
// else{
//     console.log("odd number");
//     }

// else if controle statement 
// Syntax

// if(condition1){
//     //code to be executed if condition1 is true
// }else if(condition2){
//     //code to be executed if condition1 is false and condition2 is true
// }
// else {
//     console.log("you can't vote");
// }

// let age = 121;
// if(age>=18){
//     console.log("you can vote");
// }
// else if(age<18 && age>0){
//     console.log("not adult");
// }
// else{
//     console.log("you can't vote");
// }

// let num1 = 0, num2 = 0, num3 = 3;

//( num1 > num2 && num1 > num3 )? (num2 > num1 && num2 > num3 )? console.log("num2 is greater than num1 and num3 which is") : console.log("num1 is greater than num2 and num3 which is " + num1) : console.log("num3 is greater than num1 and num2 which is " + num3);

// if (num1 === 0 && num2 === 0 && num3 === 0) {
//     console.log("all numbers are zero");
// }
// else if (num1 > num2 && num1 > num3) {
//     console.log("num1 is greater than num2 and num3 which is " + num1);
// }
// else if (num2 > num3 && num2 > num1) {
//     console.log("num2 is greater than num1 and num3 which is " + num2);
// }
// else if(num2 > num3 && num2 > num1){
//     console.log("num3 is greater than num1 and num2 which is " + num3);
// }
// else {
//     console.log("all numbers are equal");
// }


// let percentage=44;

// if(percentage>33&&percentage<60){
//     console.log("pass");
// }
// else if(percentage>=60&&percentage<70){
//     console.log("grade d");
// }
// else if(percentage>=70&&percentage<80){
//     console.log("grade c");
// }
// else if(percentage>=80&&percentage<90){
//     console.log("grade b");

// }
// else if(percentage>=90&&percentage<100){
//     console.log("grade a");
//     }
//     else if(percentage>=100){
//         console.log("percentage is greater than 100 which wrong fact");
//     }
//      else {
//         console.log("fail");
//         }


// nested if 
// let num1 = 0, num2 = 0, num3 = 3;
// if (num1 > num2 && num1 > num3) {
//     if (num2 > num3) {

//         console.log("num1 is greater than num2 and num3 which is " + num1)
//     }
//     else {
//         console.log("num1 is greater than num3 which is " + num1);
//     }
// }
// let type='veg',name='';
// if(type==='fruite'){
//     if(name==='apple'){
//         console.log("apple is a fruite");
//     }
//     else if(name==='banana'){
//         console.log("banana is a fruite");
//         }
//         else{
//             console.log("this is  a fruite");
//         }
// }
// else {
//     console.log("unknown ");
// }
// else if (num2 > num3 && num2 > num1) {

// let n1=0;
// let n2=0;
// let n3=0;
// if(n1>n2&&n1>n3){
//     console.log("n1 is greater than n2 and n3");
// }
// else if(n2>n1&&n2>n3){
//     console.log("n2 is greater than n1 and n3");
// }
// else if(n3>n1&&n3>n2){
//     console.log("n3 is greater than n1 and n2");
// }
// else{
//     console.log("all are equal");
// }
// console.log("exit")



// switch statement  
// Syntax :
// switch(expression) {
//     case value1:     
//         // code to be executed if expression matches value1
//         break;
//     case value2:
//         // code to be executed if expression matches value2
//         break;
//     default:
//         // code to be executed if expression does not match any of the values
// }

// let d=new Date();
// let day=d.getDay();
// // day=[0,1,2,3,4,5,6];
// // day=['sunday','monda','tu','we','th','fri','sat'];
// switch(day){
//     case 0:
//         console.log('today is sunday');
//         break;
//         case 1:
//             console.log('today is monday');
//             break;
//             case 2:
//                 console.log('today is tuesday');
//                 break;
//                 case 3:
//                     console.log('today is wednesday');
//                     break;
//                     case 4:
//                         console.log('today is thursday');
//                         break;
//                         case 5:
//                             console.log('today is friday');
//                             break;
//                             case 6:
//                                 console.log('today is satureday');
//                                 break;
//                                 default:
//                                     console.log('invalid day');
//                                     }
//                                     console.log('exit')
// switch statement can be used with strings, numbers and characters


// let Frut = '';
// switch (Frut) {
//     case 'apple':
//         console.log('apple is red');
//         break;
//     case 'banana':
//         console.log('banana is yellow');
//         break;
//     case 'orange':
//         console.log('orange is orange');
//         break;
//     default:
//         console.log('invalid fruit');
//         break;
// }
// console.log('exit');

// switch statement can be used with strings, numbers and characters


let num = 5;
switch (num) {
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    case 4:
        console.log('four');
        break;
    case 5:
        console.log('five');
        break;
    default:
        console.log('invalid number');
        break;
}
console.log('exit')











