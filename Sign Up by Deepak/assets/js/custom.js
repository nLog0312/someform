const btn_Login = document.querySelector('.form-right .btn-login')
const btn_Signup = document.querySelector('.form-right .btn-signup')
let SignUp = document.querySelector('.signup')
let Login = document.querySelector('.login')
let formSignUp = document.querySelector('.signup .form-left')
let formLogin = document.querySelector('.login .form-left')

// Event click button Login
btn_Login.addEventListener('click', () =>{
    formLogin.classList.remove('slideToLeft');
    formSignUp.classList.add('slideToRight');
    setTimeout(() =>{
        SignUp.classList.add('un-active');
        Login.classList.remove('un-active')
    }, 300)
});

// Event click button SignUp
btn_Signup.addEventListener('click', () =>{
    formLogin.classList.add('slideToLeft');
    formSignUp.classList.remove('slideToRight');
    setTimeout(() =>{
        SignUp.classList.remove('un-active')
        Login.classList.add('un-active');
    }, 300)
});