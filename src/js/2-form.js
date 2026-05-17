const form = document.querySelector('.feedback-form');
const formEmail = form.elements.email;
const formMessage = form.elements.message;
const key = 'feedback-form-state';
const inputs = new FormData(form);
const dataForm = {
    email: inputs.get('email').trim(),
    message: inputs.get('message').trim(),
};

if (localStorage.getItem(key) !== null) {
    const getData = JSON.parse(localStorage.getItem(key));
    formEmail.value = getData.email;
    formMessage.value = getData.message;
} 

form.addEventListener('input', () => {
    localStorage.setItem(key, JSON.stringify(dataForm));
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (formEmail.value === '' || formMessage.value === '') {
        alert('Please fill in all the fields!');
        return;
    }
    console.log(`email:`, formEmail.value);
    console.log(`message:`, formMessage.value);
    localStorage.removeItem(key);
    form.reset();
});