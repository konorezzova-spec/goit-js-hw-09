const form = document.querySelector('.feedback-form');
const formEmail = form.elements.email;
const formMessage = form.elements.message;
const key = 'feedback-form-state';
const formData = new FormData();
const formDataObj = {
    email: formData.get('email') || '',
    message: formData.get('message') || '',
};
const savedData = localStorage.getItem(key);

if (savedData !== null) {
    formDataObj.email = JSON.parse(savedData).email;
    formDataObj.message = JSON.parse(savedData).message;
    formEmail.value = formDataObj.email;
    formMessage.value = formDataObj.message;
}

form.addEventListener('input', () => {
    formDataObj.email = formEmail.value.trim();
    formDataObj.message = formMessage.value.trim();
    
    localStorage.setItem(key, JSON.stringify(formDataObj));
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (formEmail.value === '' || formMessage.value === '') {
        alert('Please fill in all the fields!');
        return;
    }
    console.log(`formDataObj:`, formDataObj);
    // Clear form and localStorage
    formDataObj.email = '';
    formDataObj.message = '';
    localStorage.removeItem(key);
    form.reset();
});