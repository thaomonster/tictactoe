var gameBoard = document.querySelector('.game-container');
var displayPlayer = document.querySelector('p')
var box = document.querySelectorAll('.box');

var game = new Game();

gameBoard.addEventListener('click', playerClick);
game.setCurrentPlayer();

function playerClick(event) {
  for (var i = 0; i < box.length; i++) {
    if (box[i].id === event.target.id) {
      if (game.playerOne.turn === true) {
        game.board[i] = game.playerOne.id;
        game.playerOne.marked.push(parseInt(box[i].id));
        box[i].innerHTML = `<img src="${game.playerOne.token}" class="box-img">`;
      } else {
        game.board[i] = game.playerTwo.id;
        game.playerTwo.marked.push(parseInt(box[i].id));
        box[i].innerHTML = `<img src="${game.playerTwo.token}" class="box-img">`;
      }
    };
  };
  game.switchPlayer(); 
  game.checkForWin(game.currentPlayer);
  displayCurrentPlayer();
};

function displayCurrentPlayer() {
  displayPlayer.innerHTML = `<p>It's <img src="${game.currentPlayer.token}" class="box-img"> turn!</p>`
}