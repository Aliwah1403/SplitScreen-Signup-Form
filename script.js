const form = document.querySelector('.right');
const showPswd = document.querySelector('.eye-icon');
const pswdField = document.getElementById('password');
const signUpForm = document.querySelector('.signupForm');
const signupBtn = document.querySelector('.signup-btn');

const formOptions = document.querySelector('.signup-options')

showPswd.addEventListener('click', () => {
    if (pswdField.type === 'password') {
        pswdField.type = 'text';

        showPswd.classList.replace('bx-hide', 'bx-show');
        return;
    }
    pswdField.type = 'password';
    showPswd.classList.replace('bx-show', 'bx-hide');
})

signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.style.display = 'block';

    formOptions.style.display = 'none';
    
})