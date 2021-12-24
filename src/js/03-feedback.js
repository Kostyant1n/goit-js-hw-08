
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};
let myJSON;
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmint);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// const isJSON = str => {
//   try {
//     JSON.parse(str);
//     return true;
//   } catch (err) {
//     return false;
//   }
// };

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;

  myJSON = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, myJSON);

  console.log(myJSON);
});

populateTextarea();

function onFormSubmint(event) {
  event.preventDefault();

  event.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  const message = event.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
