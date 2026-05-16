const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const key = 'message';

messageInput.value = localStorage.getItem(key) ?? '';

form.addEventListener('input', (evt) => {
    localStorage.setItem(key, evt.target.value);
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(`email:`, emailInput.value);
    console.log(`message:`, messageInput.value);
    localStorage.removeItem(key);
    form.reset();
});