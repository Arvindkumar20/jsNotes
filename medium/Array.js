// decleration  of array 
// let items=["apple","banana","orange"];
// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);
// console.log(items);

// for loop 
// for(let i=0;i<items.length;i++){
//     console.log(items[i]);
// }

// let i=0;
// while(i<items.length){
//     console.log(items[i]);
//     i++;
// };

// items.map((item)=>{
//     console.log(item);
// });

// for in loop 

// for(let item in items){
//     console.log(items[item]);
// }

// for of loop 
// for(let item of items){
//     console.log(item)
// }

// let arr=[1,2,3,4,5];
// for(let index in arr){
//     // console.log(index);
//     console.log(arr[index]);
// }
// for(let item of arr){
//     console.log(item);
// }

// const fruits=[
//     {
//     apple:"red",
//     banana:"yellow",
//     orange:"orange"
// },
// {
//     apple:"green",
//     banana:"green",
//     orange:"green"

// }
// ]
// for in loop
// for(let fruit in fruits){
//     console.log(fruits[fruit]);
// }
// for of loop
// for(let fruit of fruits){
//     console.log(fruit);
// }
// let array=["admin","b","c"]
// array.forEach((element) => {
//     console.log(element)
// });

// let arr=Array(1);//arr=[]//only one item can store
// let arr=Array(5,2);
// console.log(arr);
// let n="Ram"
// let arr=[n[0].substring(),n[1].substring(),n[2].substring()]


// console.log(arr)
// let arr=['r','m','r','t']
// console.log(arr.join(" "))


// let arr=[1,2,3,4,5];
// let arr1=arr.slice(2,5);
// console.log(arr1);
// chat gpt engine
// let arr =["chat","gpt" ];
// let arr=[1000,2000,3000,4000,5000]
// let arr1 = arr.splice(2,5);
// let arr1=arr.splice(2,2);
// console.log(arr1 +" new arrray");
// console.log(arr.indexOf(5));
// console.log(arr.includes(4));
// console.log(arr.join(''))
// console.log(arr.reverse())
// arr.forEach(price=>{
//     console.log(price-500);
// })
// arr.map(price=>{
//     console.log(price-500);
// });
// let user=[
//     {
//         name:'a',
//         role:"admin"
//     },
//     {
//         name:'b',
//         role:"admin"
//     },
//     {
//         name:'c',
//         role:"admin"
//     },
//     {
//         name:'d',
//         role:"b"
//     }
// ]

// let admin =user.filter(user=>user.role==='admin');
// console.log(admin);

// let arr=[1,2,3,4,5];
// const sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// let arr=[1,2,3,4,5];
// let a2=arr.find(item => item === 3);
// console.log(a2+4);


// let arr = [{ name: "a", class: "3" }, { name: "b", class: "4" },{},{}];
// const [user1, user2] = arr
// console.log(user2)

// let users=[
//     {
//         name:"raj",
//         class:"b"
//     },
//     {
//         name:"ram",
//         class:"c"
//     }



// ];
// let user={
//     name:"new",
//     class:""
// }
// let newArr=[...users ,user];
// console.log(newArr)

// let arr=[1,2,3,4,5];
// let a2=[...arr,6,7,8,9];
// console.log(a2);
//  let arr=[2,1,7,8,4];

// let arr=['c','y','a','g']
//  console.log(arr.sort())



// let arr=[1,2,3,4,5,6];
// let a2=arr.some(item=>item>6);
// console.log(a2);

// let a3=arr.every(item=>item>=1);


// console.log(a3);

// let arr=[1,2,2,3,3,4,5,6,7];
// let unique=[...new Set(arr)];
// console.log(unique);
// console.log(arr);

// let arra=new Array(5);
// console.log(arra.length)

// let a1 = [1, 2];
// let a2 = [1, 2];
// console.log(a1 == a2);
// for (let item of a1) {
//     for (let item2 of a2) {
//         if (item == item2) {

//             console.log(true);
//         }
//         else {
//             console.log(false);


//         }
//     }
// }


// let arr=[1,2,3,4,5];
// let reverse=[];
// for(let index=arr.length-1;index>=0;index--){
// //   console.log(arr[index])
//     // reverse.push(arr[index]);
// }
// console.log(reverse);

// let arr=[1,2,3,4,5];
// let reverse=[];
// for(let index=arr.length-1;index>=0;index--){
//     for(let i=0;i<index+1;i++){
//         reverse[i]=arr[index];
//     }
//     }
//     console.log(reverse);

// let arr = [6, 7, 1, 9, 3, 4, 5];
// let temp;
// for (let i = 0; i < arr.length; i++) {
//         for (j = i+1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }

//     }
// }


// for (let i = 0; i < arr.length; i++) {
//         for (j = i+1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//           console.log(arr[i]);
//         }

//     }
// }
// console.log(arr)



let arr = [6, 7, 1, 9, 3, 4, 5];

if (arr.length < 2) {
    console.log("Array must have at least two elements.");
} else {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest; // Update second largest
            largest = arr[i]; // Update largest
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]; // Update second largest only if it's not equal to the largest
        }
    }

    if (secondLargest === -Infinity) {
        console.log("No second largest number exists.");
    } else {
        console.log("The second largest number is:", secondLargest);
    }
}
