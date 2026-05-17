const form = document.querySelector('.feedback-form');
const formEmail = form.elements.email;
const formMessage = form.elements.message;
const key = 'feedback-form-state';
const formData = new FormData();

if (localStorage.getItem(key) !== null) {
    formData.append('email', JSON.parse(localStorage.getItem(key)).email);
    formData.append('message', JSON.parse(localStorage.getItem(key)).message);
    formEmail.value = formData.get('email');
    formMessage.value = formData.get('message');
}

form.addEventListener('input', () => {
    formData.set('email', formEmail.value.trim());
    formData.set('message', formMessage.value.trim());
    
    localStorage.setItem(key, JSON.stringify(Object.fromEntries(formData.entries())));
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (formEmail.value === '' || formMessage.value === '') {
        alert('Please fill in all the fields!');
        return;
    }
    const formData = new FormData(form);
    console.log(`formData:`, Object.fromEntries(formData.entries()));
    formData.delete('email');
    formData.delete('message');
    localStorage.removeItem(key);
    form.reset();
});