
window.onload = function () {
    const h1 = document.querySelector('#random-div h1');
    const tacosElem = document.getElementById('tacos');

    h1.addEventListener('mouseover', function () {
        document.body.style.backgroundColor = 'red';
    });

    tacosElem.addEventListener('dblclick', function () {
        document.body.style.backgroundColor = 'cornflowerblue';
    });
}
