import throttle from "lodash.throttle";

const STORAGE_KEY = `feedback-form-state`;
var formData = {};
const refs = {
    form: document.querySelector(`.feedback-form`),
    input: document.querySelector(`.feedback-form input`),
    textarea: document.querySelector(`.feedback-form textarea`),
};

refs.form.addEventListener(`submit`, onFormSubmit);
refs.form.addEventListener(`input`, throttle(onTextareaInput, 500));


populateTextarea();


function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY );   
};

function onTextareaInput(event) {
     formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
    
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedSavedMessage = JSON.parse(savedMessage);
    if (formData = parsedSavedMessage) {
        refs.textarea.value = parsedSavedMessage.message;
        refs.input.value = parsedSavedMessage.email;
    }
};





