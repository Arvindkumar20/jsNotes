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


const checkPalindromNumber = (num) => {
    let remainder = 0;
    let originalNum = num;
    let sum = 0;
    while (num > 0) {
        remainder = num % 10;
        sum = sum * 10 + remainder;
        num = Math.floor(num / 10);
    }
    if (originalNum === sum) {
        return true;
    }
    else {
        return false;
    }
}

let result = checkPalindromNumber(12345654321);
result ? console.log("Palindrom  Number") : console.log("Not Palindrom  Number");



