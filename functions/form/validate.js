// get elements create variables 
let btn = document.getElementById('submit');
let password = document.getElementById('password');
let user = document.getElementById('username');
let email = document.getElementById('email');
let errorEmail = document.getElementById('errorEmail');
let errorPassword = document.getElementById('errorPassword');

let form=document.getElementsByTagName('form')[0];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateForm();
});
form.addEventListener('reset',()=>{
console.log("reset")
console.log(document)
})

//  key event KKKKKKKKKKKKKKKKKKKKEEEEEEEEEEEEEEEEEYYYYYYYYYYYYYYYYYYYY 
// user.addEventListener('keydown',(e)=>{
//     console.log(user.value)
//     // console.log(user.value)
// });
// user.addEventListener('keypress',(e)=>{
//     console.log(user.value.length);
//     // console.log(user.value)
// });
// user.addEventListener('keyup',(e)=>{
//     console.log(user.value)
//     // console.log(user.value)
// });

// for encript password ///+++++++++++++++++++++++++=================
let pass = 'asgcsuygwy2367sbdcbnn3trt23@#$%^&*bchdvvxcswygs'

// validate user details 
const validateForm = () => {
    if (user.value == '' || user.value === null || password.value == '' || password.value === null || email.value == '' || email.value === null) {
        errorEmail.innerHTML = 'All fields are required'
        errorEmail.style.color = 'red'
        if (user.value == '' || user.value == null) {
            user.style.border = '2px solid red'
        }
        else if (password.value == '' || password.value === null) {
            password.style.border = '2px solid red'
        }
        else if (email.value == '' || email.value === null) {
            email.style.border = '2px solid red'
        }
    }
    else if (password.value.length < 6) {
        errorPassword.innerHTML = 'Password must be at least 6 characters long';
        password.style.border = '2px solid red';
        errorPassword.style.color = 'red'
    }
    else if (!email.value.includes('@')) {
        errorEmail.innerHTML = 'Invalid email address';
        email.style.border = '2px solid red';
        errorEmail.style.color = 'red'
    }
    else {

        // send data to backend 
        console.log({
            username: user.value,
            password: pass + password.value + pass,
            email: email.value
        });
        errorEmail.innerHTML = ''
        errorPassword.innerHTML = ' ';
        user.style.border = 'solid green 2px';
        password.style.border = 'solid green 2px';
        email.style.border = 'solid green 2px';
        password.value = ''
        user.value = ''
        email.value = ''


    }
}
// function for form submission  
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     validateForm();
// });