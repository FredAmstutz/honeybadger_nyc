   window.onload = function () {
       const title = document.getElementById('page-title');
       const awesomeList = document.getElementById('awesome-list');
       
       const newLi = document.createElement('li');
       newLi.classList.add('awesome-list-item');
       newLi.innerHTML = 'Yeah thats I thought';
       awesomeList.appendChild(newLi);

       const image = document.getElementById('image-container');
       image.remove();
       document.body.appendChild(image);

       title.style.color = 'red';

       const description = document.getElementById('description');
       description.classList.add('green');

       const list = document.getElementsByClassName('awesome-list-item');
       for(let i = 0; i < list.length; i ++) {
           let currentItem = list[i];
           currentItem.classList.add('blue'); 
       }

       const footer = document.createElement('footer');
       footer.innerHTML = 'Thanks for visiting';
       footer.classList.add('red');
       document.body.appendChild(footer);
   }
   
   
   // window.onload = function() {
    //     const theTitle = document.getElementsByTagName('title');
    //     console.log(theTitle);
       
    //     const heading = document.getElementById('page-title').innerHTML;
    //     console.log(heading);
        
    //     const list = document.getElementById('awesome-list');
    //     console.log(list);

    //     let newLi = document.createElement('li');
    //     newLi.classList.add('awesome-list-item');
    //     newLi.innerHTML = 'I am the new list item';

    //     list.appendChild
    // };

    
