const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

function readFormData(form) {
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  return {
    message,
    email,
  };
}

form.addEventListener('input', event => {
  const data = readFormData(event.currentTarget);
  const jsonData = JSON.stringify(data);
  localStorage.setItem(localStorageKey, jsonData);
});

const localFormData = localStorage.getItem(localStorageKey);
if (localFormData) {
  const data = JSON.parse(localFormData);
  if (data.email && data.message) {
    form.email.value = data.email;
    form.message.value = data.message;
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const object = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };
  if(object.email && object.message){
  console.log(object);
  localStorage.removeItem(localStorageKey);
  form.reset();
  }
  else{
    alert("Please fill out both email and message fields.");
  }
});
