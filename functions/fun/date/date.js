// Standard Date and Time Functions
//=====================================
// Returns the current date and time
// function getCurrentDateTime() {
//     return new Date().toISOString().replace('T', ' ').replace('Z', '').split('.')[
//         0];
// }
// console.log(getCurrentDateTime());
// let date=new Date();
// console.log(date)
//=====================================
// for time 
// console.log(date.toLocaleTimeString());//11:50:07 am
// console.log(date.toTimeString());//11:51:10 GMT+0530 (India Standard Time)

// let second=date.getSeconds();
// let minute=date.getMinutes();
// let hour=date.getHours();
// console.log('second : ' +second);
// console.log('minute : ' +minute);
// console.log('hour : ' +hour);
// console.log(hour+":"+minute+":"+second);

//=====================================
// //for  date 
// let currentDate=date.getDate();

// console.log(date.toLocaleDateString()); //19/12/2024

// let currentMonth=date.getMonth();
// let currentYear=date.getFullYear();
// // console.log(currentDate);
// // console.log(currentMonth);
// // console.log(currentYear);
// console.log(currentDate+"/"+currentMonth+"/"+currentYear);

//=====================================
// toDateString 
// let date=new Date();
// console.log(date.toDateString());//Thu Dec 19 2024

// console.log(date.getDay());//[sunday,monday,tuesday,wednesday,thursday,friday,satureday];

// console.log(Date.now());



// let backDay=new Date('2024-12-18');
// console.log(backDay.toLocaleDateString());
//=====================================
// let date=new Date('2024-11-10');
// date.setDate(2)
// console.log(date.toDateString());

// const date = new Date();
// const nextWeek = new Date();
// nextWeek.setDate(date.getDate() + 7); // Add 7 days to the current date
// console.log(nextWeek.toLocaleDateString());
