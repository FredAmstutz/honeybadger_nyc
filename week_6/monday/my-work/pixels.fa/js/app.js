window.onload = function() {
  for(let i = 0; i < 15; i++) {
    const grid = document.getElementById('container');
    let pixel = document.createElement('section');
    var rowId = i;
    
    for(let j = 0; j < 15; j++) {
      var colId = j;
      (function() { 
        var pixelId = rowId + '-' + colId; 
        pixel.setAttribute('id', pixelId); 
        pixel.classList.add('pixel');
        console.log(pixelId)
        grid.appendChild(pixel);
      })();
    }
  }
}

