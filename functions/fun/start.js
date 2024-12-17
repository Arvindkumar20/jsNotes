// function greet(){
//     console.log("object");
// }
// console.log("before calling")
// greet();  
// console.log("after calling")






// const hello=()=>{
//     console.log("hello")
// }
// console.log("before calling")
// console.log("after calling")
// hello();

// function addTwoNumbers(n1,n2){
//    return n1+n2;
// }

// console.log(addTwoNumbers(2,3));
// console.log(addTwoNumbers(10,30));

// function checkNumber(num){
//     if(num%2===0){
//         // return "even";
//         console.log("even")
//     }
//     else{
//         //    return "odd";
//         console.log("odd")
// }
// }
// checkNumber(4)
// checkNumber(5)
// console.log(checkNumber(5));
// console.log(checkNumber(4));


// const swapTwoNumbers=(a,b,c=0)=>{
//     c=a;
//     a=b;
//     b=c;
//     return [a,b];

// }
// console.log(swapTwoNumbers(10,20));

// const foctorial=(num)=>{
//     if(num===0){
//         return 1;
//         }
//         else{
//             return num*foctorial(num-1);
//             }
//             }

//             let result=foctorial(5);
//             console.log(result);

// const factorial=(num)=>{
//     let result=1;
//     while(num>0){
//         result*=num;//result=result*num;
//         num--;//num=num-1;
//         }
//         return result;
// }
// console.log(factorial(7));


// const checkPalindromNumber = (num) => {
//     let remainder = 0;
//     let originalNum = num;
//     let sum = 0;
//     while (num > 0) {
//         remainder = num % 10;
//         sum = sum * 10 + remainder;
//         num = Math.floor(num / 10);
//     }
//     if (originalNum === sum) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// let result = checkPalindromNumber(12345654321);
// result ? console.log("Palindrom  Number") : console.log("Not Palindrom  Number");

// check prime Number 
// const checkPrimeNumber = (num) => {
//         let isPrime = true;      
//         for (let i = 2; i <= num / 2; i++)
//         {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }    
//         }
//         if (isPrime) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     let result = checkPrimeNumber(1205);
//     result ? console.log("Prime Number") : console.log("Not Prime Number");
 

//  return values 
// function returnValues(name){
//     return name+" hello";
// }
// console.log(returnValues("John"));
// console.log(returnValues("Raj")); 

// function returnValues(val){
//     return val+5;
// }
// let result=returnValues(10);
// console.log(result);


// Higher-Order Functions
// let arr=[1,2,3,4,5];
// arr.map((item)=>{
//     console.log(item);
// });

// input.addEventListner("key-press",function(){

// });

// function innerFunction(value){
//     return value+10;
//     }

// function topLevelFunction(num){
//     return innerFunction(num);
// }

// console.log(topLevelFunction(2));

//  closer
// function outerFunction(){
//     let counter=0;
//     return function innerFunction(){
//          counter++;
//         console.log(counter);
//     }
// }
// let inner=outerFunction();

// console.log(inner());

// recursive function //recursion
// function factorial(n){
//     if(n==0){
//         return 1;
//     }
//     else{
//         return n*factorial(n-1);//5*4*3*2*1
//     }
// }

// console.log(factorial(5));////5*4*3*2*1

// 10. Anonymous Functions
// let arr=[1,2,3,4,5];
// arr.map(function(item){
//     console.log(item);
// });

// setTimeout(()=>{
//     console.log("Hello");
// },2000);

// immediately invoked function expression IIFE 
// (()=>{
//     let counter=0;
//     for(let i=0;i<10;i++){
//         counter++;
//         console.log(counter);

//         }
//         })()//immediately invoked function expression IIFE
// (()=>{

// })();

// rest parameter function 
// function sum(...numbers){//[1,2,3,4,5]
//     let sum=0;
//     for(let i=0;i<numbers.length;i++){
//         sum+=numbers[i];//sum+numbers[i];
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5));////1+2+3+4+5

// const greate=(...names)=>{
//   for (i=0;i<names.length;i++){
//     if(i%2==0){
//         console.log(names[i].toUpperCase());
//     }
//     console.log(names[i]+" Hello")
//   }
// }

// greate("John","Mary","David")


// Async Functions
// async function myFunction(){
//     console.log("Hello");
//     await setTimeout(function(){
//         console.log("World");
//     },2000);
//     console.log("object");

// }
//  myFunction();

// 14. Function Hoisting
// myFunction();
// function myFunction(){
//     console.log("Hello");
// }


// Promise 
// console.log("object top");
// fetch("https://www.google.com").then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error.stack);
// })
// console.log("object bottom");


// const promise = new Promise((resolve, reject) => {
//         // code that takes some time
//         setTimeout(() => {
//                 const data ="5";
//                 // resolve(data);
//                 reject(data);
//             }, 2000);
//         });
//         console.log(promise);
        
//         promise.then((data) => {
//                 console.log(data);

//             }).catch((error) => {
//                     console.log(error);
//                 });
//                 console.log("object")
//                 console.log(promise);
                // console.log(promise);


                // closer 
            //     function myFunction(){
            //         var x = 10;
            //         console.log("Hello");
            //         function innerFunction(){
            //             console.log("World");
            //         }
            //         // innerFunction();
            //     }
            //   let inner=myFunction;
            //     inner();
                // console.log("object");
                // console.log("object");


                // recursion 
            //     function sumFun(num){
            //         let sum=0//15
            //         if(num==0){
            //             return sum;
            //         }
            //         return sum=num+sumFun(num-1);//5+4+3+2+1
            //     }
            //    let result= sumFun(5);
            //    console.log(result);


            // properties of function 
            // function myFunction(){
            //     console.log("Hello");
            //     console.log(this);
            // }
            // myFunction.call({name:"John",age:30});
            // myFunction.apply({name:"John"});
            // console.log(myFunction);


// arrow function not provide access of this 
            // const nextFunction=()=>{
            //     console.log("Hello");
            //     console.log(this.name);
            // }
            // nextFunction({name:"raj",age:21});



// carrying
// function carry(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// let add=carry(5)(4)(3);
// console.log(add);

// 17. Partial Application
// function add(a,b,c){
//     return a+b+c;
// }
// let addFive=add.bind(null,5);//add(, , 5);
// let result=addFive(4,3);//add (4,3,5)
// console.log(result);

