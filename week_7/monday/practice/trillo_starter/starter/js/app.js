$(function() {
    $('.card-list').on('click', '.delete', removeCard);
    $('.card-list').on('click', '.finish', finishItem);
    $('#new-card-button').on('click', createCard);
    

    function removeCard() {
      //this.parentNode.remove();
      $(this).parent().remove();
    }

    function finishItem() {
      let $currentCard = $(this).parent();
      $('#done-column ul').append($currentCard);
      let $finish = $(this);
      $finish.remove();
    }

    function createCard() {
      let $newCardText = $('#new-card-text').val();
      let $newCard = $(`
        <li class='card todo'>
        ${$newCardText}
        <span class="delete">X</span>
        <span class="finish">Finish</span>
        </li>
      `);
      $('#todo-column .card-list').append($newCard);
    }
});
