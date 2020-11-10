class Game {
  constructor() {
    this.playerOne = new Player('p1', './assets/harrypotter.jpg', true);
    this.playerTwo = new Player('p2', './assets/voldemort.png', false);
    this.currentPlayer = this.playerOne;
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.winCombos = [
      [0,4,8], 
      [2,4,6],
      [0,1,2], 
      [3,4,5], 
      [6,7,8],
      [0,3,6], 
      [1,4,7], 
      [2,5,8],
    ];
  };

  setCurrentPlayer() {
    if (this.playerOne.turn) {
      this.currentPlayer = this.playerTwo;
    } else {
      this.currentPlayer = this.playerOne;
    };
  };

  switchPlayer() {
    this.setCurrentPlayer();
    this.playerOne.turn = !this.playerOne.turn
    this.playerTwo.turn = !this.playerTwo.turn
  };

  checkForWin() {
    if (this.board.length > 4) {
      for (var i = 0; i < this.winCombos.length; i++) {
        for (var j = 0; j < this.winCombos[i].length; j++) {
          var k = this.winCombos[i][j];
          var l = this.winCombos[i][j+1];
          var m = this.winCombos[i][j+2];
          if (this.board[l] && this.board[k] === this.board[l] && this.board[l] === this.board[m]) {
            this.currentPlayer.wins++
            this.currentPlayer.gameWon = true;
            return;
          };
        };
      };
    };
  };
};
