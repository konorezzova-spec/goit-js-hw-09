const form = document.querySelector('.feedback-form');
const formEmail = form.elements.email;
const formMessage = form.elements.message;
const key = 'feedback-form-state';

formEmail.value = JSON.parse(localStorage.getItem(key)).email ?? '';
formMessage.value = JSON.parse(localStorage.getItem(key)).message ?? '';

form.addEventListener('input', () => {
    const inputs = new FormData(form);
    const dataForm = {
        email: inputs.get('email'),
        message: inputs.get('message'),
    };
    localStorage.setItem(key, JSON.stringify(dataForm));
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(`email:`, formEmail.value);
    console.log(`message:`, formMessage.value);
    localStorage.removeItem(key);
    form.reset();
});