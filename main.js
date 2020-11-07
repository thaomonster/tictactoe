var gameBoard = document.querySelector('.game-section');
var box = document.querySelectorAll('.box');

var game = new Game();

gameBoard.addEventListener('click', playerClick);

function playerClick(event) {
  for (var i = 0; i < box.length; i++) {
    if (box[i].id === event.target.id) {
      if (game.playerOne.turn === true) {
        game.board[i] = game.playerOne.id;
        box[i].innerHTML = `<img src="./assets/${game.playerOne.token}" class="box-img">`;
      } else {
        game.board[i] = game.playerTwo.id;
        box[i].innerHTML = `<img src="./assets/${game.playerTwo.token}" class="box-img">`;
      }
    };
  };
  game.switchPlayer(); 
  console.log(game.board)
};