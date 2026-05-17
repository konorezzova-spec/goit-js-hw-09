const form = document.querySelector('.feedback-form');
const formEmail = form.elements.email;
const formMessage = form.elements.message;
const key = 'feedback-form-state';

const formDataObj = new FormData(form);
const formData = {
    email: formDataObj.get('email') || '',
    message: formDataObj.get('message') || '',
};

const savedData = localStorage.getItem(key);

if (savedData !== null) {
    formData.email = JSON.parse(savedData).email;
    formData.message = JSON.parse(savedData).message;
    formEmail.value = formData.email;
    formMessage.value = formData.message;
}

form.addEventListener('input', () => {
    formData.email = formEmail.value.trim();
    formData.message = formMessage.value.trim();
    
    localStorage.setItem(key, JSON.stringify(formData));
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (formEmail.value === '' || formMessage.value === '') {
        alert('Please fill in all the fields!');
        return;
    }
    console.log(`formData:`, formData);
    // Clear form and localStorage
    formData.email = '';
    formData.message = '';
    localStorage.removeItem(key);
    form.reset();
});