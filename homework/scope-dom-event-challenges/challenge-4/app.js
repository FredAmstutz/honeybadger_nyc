// Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.

const heading = document.getElementById('heading');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    if(password.value == 12345678) {
        heading.innerHTML = 'Thanks for signing up!';
    }
    else {
        alert('incorrect');
    }
})