var gameBoard = document.querySelector('.game-section');
var box = document.querySelectorAll('.box');

var game = new Game();

gameBoard.addEventListener('click', playerClick);

function playerClick(event) {
  for (var i = 0; i < box.length; i++) {
    if (box[i].id === event.target.id) {
      // box[i].id.classList.add(currentPlayer);
      box[i].innerHTML = `<img src="./assets/harrypotter.jpg" class="box-img">`;
      //game.board[i] = currentPlayer
    };
  };
};


