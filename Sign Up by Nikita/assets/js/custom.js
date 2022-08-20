// Get Element Form
let formBack = document.querySelector('.form-back')
let formSignIn = document.querySelector('.form-signIn')
let formSignUp = document.querySelector('.form-signUp')

// Get Attribute
// Sign In
let AttributeSignIn = document.querySelector('.signIn')
let SignInActive = document.querySelector('.signIn-active')
let AttributeSignUp = document.querySelector('.signUp')
let SignUpActive = document.querySelector('.signUp-active')
let AttributeTexts = document.querySelectorAll('.text-form')
let AttributeIcons = document.querySelectorAll('.form-icon')


// Event Click
formSignIn.addEventListener('click', () =>{
    formSignIn.classList.add('active');
    formSignIn.classList.remove('un-active');

    formSignUp.classList.remove('active');
    formSignUp.classList.add('un-active');

    AttributeIcons[1].classList.add('sideUp');
    AttributeTexts[2].classList.add('hide');

    AttributeSignUp.classList.remove('hide');
    SignUpActive.classList.add('hide');
    
    setTimeout(() =>{
        AttributeSignIn.classList.add('hide');
        SignInActive.classList.remove('hide');
    }, 300)
})

formSignUp.addEventListener('click', () =>{
    formSignUp.classList.add('active');
    formSignUp.classList.remove('un-active');

    formSignIn.classList.add('un-active');
    formSignIn.classList.remove('active');
    
    AttributeIcons[0].classList.add('sideUp');
    AttributeTexts[0].classList.add('hide');

    AttributeSignIn.classList.remove('hide');
    SignInActive.classList.add('hide');

    setTimeout(() =>{
        AttributeSignUp.classList.add('hide');
        SignUpActive.classList.remove('hide');
    }, 300)
})

let sideWhite = document.querySelector('.sideWhite')

formBack.addEventListener('click', () =>{
    sideWhite.classList.add('slideToRight');

    setTimeout(() =>{
        AttributeSignIn.classList.remove('hide');
        AttributeSignUp.classList.remove('hide');

        SignInActive.classList.add('hide');
        SignUpActive.classList.add('hide');

        formSignIn.classList.remove('active');
        formSignUp.classList.remove('active');

        formSignIn.classList.remove('un-active');
        formSignUp.classList.remove('un-active');

        for (let AttributeIcon of AttributeIcons) {
            AttributeIcon.classList.remove('sideUp');
        }

        for (let AttributeText of AttributeTexts) {
            AttributeText.classList.remove('hide');
        }

        sideWhite.classList.remove('slideToRight');
    }, 500)
})
