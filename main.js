var gameBoard = document.querySelector('.game-container');
var displayPlayer = document.querySelector('.header-section')
var box = document.querySelectorAll('.box');

var game = new Game();

gameBoard.addEventListener('click', playerClick);
game.setCurrentPlayer();

function playerClick(event) {
  for (var i = 0; i < box.length; i++) {
    if (box[i].id === event.target.id) {
      // if (game.playerOne.turn === true) {
        game.board[i] = game.currentPlayer.id;
        // game.currentPlayer.marked.push(parseInt(box[i].id));
        box[i].innerHTML = `<img src="${game.currentPlayer.token}" class="box-img">`;
      } 
    // };
  };
  game.switchPlayer(); 
  game.checkForWin(game.currentPlayer);
  displayCurrentPlayer();
};

function displayCurrentPlayer() {
  displayPlayer.innerHTML = `<p> It's <img src="${game.currentPlayer.token}" class="change-img"> turn!</p>`
};