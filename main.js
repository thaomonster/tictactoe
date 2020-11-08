var gameBoard = document.querySelector('.game-container');
var displayPlayer = document.querySelector('.header-section')
var box = document.querySelectorAll('.box');

var game = new Game();

gameBoard.addEventListener('click', playerClick);

function playerClick(event) {
  for (var i = 0; i < box.length; i++) {
    if (box[i].id === event.target.id) {
        game.board[i] = game.currentPlayer.id;
        // game.currentPlayer.marked.push(parseInt(box[i].id));
        box[i].innerHTML = `<img src="${game.currentPlayer.token}" class="box-img">`;
    };
  };

  

  game.switchPlayer(); 
  displayCurrentPlayer();
};

function displayCurrentPlayer() {
  displayPlayer.innerHTML = `<p> It's <img src="${game.currentPlayer.token}" class="change-img"> turn!</p>`
};

function winCheck() {
  if (game.board.length > 2) {
    game.checkForWin(game.currentPlayer);
  };
};