var gameBoard = document.querySelector('.game-container');
var box = document.querySelectorAll('.box');

var playerTurnHeader = document.querySelector('.player-turn-header');
var winnerHeader = document.querySelector('.winner-header');
var drawHeader = document.querySelector('.draw-header')
var winCount = document.querySelectorAll('.win-count')

var game = new Game();

window.onLoad = showWinCount();
gameBoard.addEventListener('click', playerClick);

function playerClick(event) {
  for (var i = 0; i < box.length; i++) {
    if (box[i].id === event.target.id) {
        game.board[i] = game.currentPlayer.id;
      toggleCurrentPlayer(i); 
    };
  };
};

function toggleCurrentPlayer(index) {
  if (box[index].innerHTML === '') {
    box[index].innerHTML = `<img src="${game.currentPlayer.token}" class="box-img">`
    displayCurrentWinner();
    showWinCount();
    game.switchPlayer(); 
    displayCurrentPlayer();
  };
}

function displayCurrentPlayer() {
  playerTurnHeader.innerHTML = `<span class="player-turn-header"> It's <img src="${game.currentPlayer.token}" class="header-img"> turn!</span>`
};

function displayCurrentWinner() {
  game.checkForWin();

  if (game.currentPlayer.gameWon === true) {
    toggleHeader(playerTurnHeader, winnerHeader);
    displayWinner();
    game.currentPlayer.saveWinsToStorage();
    gameBoard.removeEventListener('click', playerClick);
    timeout();
  } else {
    checkForDraw()
  };
};

function displayWinner() {
  winnerHeader.innerHTML = `<span class="player-turn-header"><img src="${game.currentPlayer.token}" class="header-img"> Avada Kedavra!</span>`
};

function toggleHeader(headerOne, headerTwo) {
  headerOne.classList.add('hidden')
  headerTwo.classList.remove('hidden')
};

function checkForDraw() {
  if (game.board.includes('')) {
    return
  } else {
   toggleHeader(playerTurnHeader, drawHeader)
  };
  timeout();
};

function showWinCount() {
  game.playerOne.retrieveWinsFromStorage();
  game.playerTwo.retrieveWinsFromStorage();
  winCount[0].innerText = `${game.playerOne.wins} Wins`
  winCount[1].innerText = `${game.playerTwo.wins} Wins`
};  

function endGame() {
  for (var i = 0; i < box.length; i++) {
    box[i].innerHTML = '';
  }
  location.reload();
};

function timeout() {
  window.setTimeout(endGame, 2000);
};