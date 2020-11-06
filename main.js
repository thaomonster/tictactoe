var gameBoard = document.querySelector('#game-section');
var square = document.querySelectorAll('.square');

gameBoard.addEventListener('click', playerClick);

function playerClick(event) {
  for (var i = 0; i < square.length; i++) {
    if (square[i].id === event.target.id) {
      square[i].innerHTML = `<img src=./assets/harrypotter.jpg id="square-img">`
    }
  }
}