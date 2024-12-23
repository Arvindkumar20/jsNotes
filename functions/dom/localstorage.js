let logiForm=document.getElementById('loginForm');
logiForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
   const userDetail={
         username:username,
         password:password
    };
    let data=[];
    let contacts=localStorage.getItem('userDetail');
    if(contacts==null){
        data=[];
    }
    else{
        data=JSON.parse(contacts);
    }
    data.push(userDetail);
    localStorage.setItem('userDetail', JSON.stringify(data));
    console.log(data);
});    