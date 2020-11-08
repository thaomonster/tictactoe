var gameBoard = document.querySelector('.game-container');
var playerTurnHeader = document.querySelector('.player-turn-header');
var winnerHeader = document.querySelector('.winner-header');
var box = document.querySelectorAll('.box');

var game = new Game();

gameBoard.addEventListener('click', gameStart);

function gameStart(event) {
  playerClick(event);
  displayCurrentWinner();
  game.switchPlayer(); 
  displayCurrentPlayer();
};

function playerClick(event) {
  for (var i = 0; i < box.length; i++) {
    if (box[i].id === event.target.id) {
        game.board[i] = game.currentPlayer.id;
        // game.currentPlayer.marked.push(parseInt(box[i].id));
        box[i].innerHTML = `<img src="${game.currentPlayer.token}" class="box-img">`;
    };
  };
};

function displayCurrentPlayer() {
 playerTurnHeader.innerHTML = `<span class="player-turn-header"> It's <img src="${game.currentPlayer.token}" class="header-img"> turn!</span>`
};

function displayCurrentWinner() {
  game.checkForWin(game.currentPlayer);

  if (game.currentPlayer.gameWon === true) {
    toggleHeader(playerTurnHeader, winnerHeader);
    displayWinner();
  };
};

function displayWinner() {
  winnerHeader.innerHTML = `<span class="player-turn-header"><img src="${game.currentPlayer.token}" class="header-img"> won!</span>`
};

function toggleHeader(headerOne, headerTwo) {
  headerOne.classList.add('hidden')
  headerTwo.classList.remove('hidden')
};


