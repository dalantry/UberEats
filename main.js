const formAuth = document.querySelector('.form-auth');
const authIcon = document.querySelector('.header__auth');

function openForm() {
    formAuth.classList.toggle('form-auth_active');
};

authIcon.addEventListener('click', openForm);
