window.onload = function () {
    // ACCESSING NODES IN THE DOM

    const heading = document.getElementById('main-heading')
    const heading2 = document.getElementsByTagName('h1')
    const listItems = document.getElementsByClassName('list-item')
    const image = document.querySelector('#image')
    const descriptions = document.querySelectorAll('.description')

    // ACCEESS THE TEXT OF A NODE

    console.log(heading.innerHTML)

    // EDITING THE CONTENT OF A NODE

    heading.innerHTML = 'WELCOME TO THE JUNGLE';
    console.log(heading.innerHTML)

    // ADDING ELEMENTS TO THE DOM

    let newLi = document.createElement('li');
    newLi.classList.add('list-item');
    newLi.innerHTML = 'NEW LI';

    // UPDATING STYLING

    heading.style.color = 'red';
    heading.style.fontFamily = 'Helvetica';
};