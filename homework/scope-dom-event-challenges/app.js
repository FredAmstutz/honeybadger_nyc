// 1. Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"

const button1 = document.querySelector('.cha-1-button1');
const button2 = document.querySelector('.cha-1-button2');
const text = document.querySelector('.cha-1-text');

button1.addEventListener('click', function() {
    text.innerHTML = 'I\'m right';
});

button2.addEventListener('click', function() {
    text.innerHTML = 'No, I\'m right!';
});

// 2. Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"

const theDiv = document.querySelector('.cha-2-div');

theDiv.addEventListener('mouseover', function() {
    alert('Hey, I told you not to hover over me!');
});

// 3. Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the H1 should show the value of the key they have pressed.
// Example: If the user presses "J", the text inside the H1 should be "J".

document.addEventListener('keypress', function(e) {
    const text = document.querySelector('.cha-3-key');
    text.innerHTML = e.key;
});

// 4. Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.

const formTitle = document.querySelector('.cha-4-heading');
const username = document.querySelector('.cha-4-username');
const password = document.querySelector('.cha-4-password');
const submitButton = document.querySelector('.cha-4-submit');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const hasNumber = /\d/;
    if(password.value == 12345678 && hasNumber.test(username.value)) {
        formTitle.innerHTML = 'Thanks for signing up!';
    }
    else {
        alert('Please fill the fields out correctly.');
    }
});