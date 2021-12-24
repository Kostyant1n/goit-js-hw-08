import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const savedData = localStorage.getItem(STORAGE_KEY);
testPreviousSavings();

form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function testPreviousSavings() {
  if (JSON.parse(savedData)) {
    console.log(JSON.parse(savedData));
    input.value = JSON.parse(savedData).email;
    textarea.value = JSON.parse(savedData).message;
  }
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(savedData));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
