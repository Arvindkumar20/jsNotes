let btn = document.getElementById('submit');
let password = document.getElementById('password');
let user = document.getElementById('username');
let email = document.getElementById('email');
let errorEmail = document.getElementById('errorEmail');
let errorPassword = document.getElementById('errorPassword');
// console.log(btn)
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (user === '' || user === null || password === '' || password === null || email == '' || email === null) {
        user.style.border = 'solid red 2px'
        password.style.border = 'solid red 2px'
        email.style.border = 'solid red 2px'

    }
    else {
        if (password.value.length < 6) {
            password.style.border = 'solid red 2px';
            errorPassword.style.color='red'
            errorPassword.textContent = 'Password must be at least 6 characters long';

        }
        if (!email.value.includes('@')) {
            email.style.border = 'solid red 2px';
              errorEmail.style.color='red'
            errorEmail.textContent = 'Invalid email address';

        }
        user.style.border = 'solid green 2px';
        password.style.border = 'solid green 2px';
        email.style.border = 'solid green 2px';
        password.value = ''
        user.value = ''
        email.value = ''
    }
});