window.onload = function () {
    const del = document.getElementsByClassName('delete');
    const finish = document.getElementsByClassName('finish');
    const doneCol = document.getElementsByClassName('card-list')[1];
 

    for(let i = 0; i < del.length; i++) {
        addRemoveListener(del[i]);
    }

    for(let i = 0; i < finish.length; i++) {
        completeTask(finish[i]);
    }

    function addRemoveListener(node) {
        node.addEventListener('click', function () {
            this.parentNode.remove();
        });
    }

    // function completeTask(node) {
    //     node.addEventListener('click', function () {
    //         const parentNode = this.parentNode;
    //         this.remove();
    //         parentNode.remove();
    //         parentNode.classList.remove('todo');
    //         parentNode.classList.add('done');
    //         document.querySelector('#done-column .card-list').appendChild(parentNode);
    //     });
    // }

   
};