// Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"

const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const text = document.getElementById('text');

button1.addEventListener('click', function() {
    text.innerHTML = 'I\'m right';
});

button2.addEventListener('click', function() {
    text.innerHTML = 'No, I\'m right!';
});
