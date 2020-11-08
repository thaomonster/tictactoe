class Game {
  constructor() {
    this.playerOne = new Player('p1', './assets/harrypotter.jpg', true);
    this.playerTwo = new Player('p2', './assets/voldemort.png', false);
    this.currentPlayer = this.playerOne;
    this.board = ['', '', '', '', '', '', '', '', ''];
    // this.winCombos = [
    //   [0,4,8], 
    //   [2,4,6],
    //   [0,1,2], 
    //   [3,4,5], 
    //   [6,7,8],
    //   [0,3,6], 
    //   [1,4,7], 
    //   [2,5,8],
    // ];
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

  checkForWin(player) {
    if (game.board.length > 4) {
      for (var i = 0; i < this.board.length; i++) {
        if (this.board[0] === player.id && this.board[4] === player.id && this.board[8] === player.id) {
          this.currentPlayer.wins++
          this.currentPlayer.gameWon = true;
          return;
        } else if (this.board[2] === player.id && this.board[4] === player.id && this.board[6] === player.id) {
          this.currentPlayer.wins++
          this.currentPlayer.gameWon = true;
          return;
        } else if (this.board[0] === player.id && this.board[1] === player.id && this.board[2] === player.id) {
          this.currentPlayer.wins++
          this.currentPlayer.gameWon = true;
          return;
        } else if (this.board[3] === player.id && this.board[4] === player.id && this.board[5] === player.id) {
          this.currentPlayer.wins++
          this.currentPlayer.gameWon = true;
          return;
        } else if (this.board[6] === player.id && this.board[7] === player.id && this.board[8] === player.id) {
          this.currentPlayer.wins++
          this.currentPlayer.gameWon = true;
          return;
        } else if (this.board[0] === player.id && this.board[3] === player.id && this.board[6] === player.id) {
          this.currentPlayer.wins++
          this.currentPlayer.gameWon = true;
          return;
        } else if (this.board[2] === player.id && this.board[4] === player.id && this.board[6] === player.id) {
          this.currentPlayer.wins++
          this.currentPlayer.gameWon = true;
          return;
        } else if (this.board[1] === player.id && this.board[4] === player.id && this.board[7] === player.id) {
          this.currentPlayer.wins++
          this.currentPlayer.gameWon = true;
          return;
        } else if (this.board[2] === player.id && this.board[5] === player.id && this.board[8] === player.id) {
          this.currentPlayer.wins++
          this.currentPlayer.gameWon = true;
          return;
        };
      };
    };
  };


    // if (this.currentPlayer.marked.length > 2) {
    //   for (var i = 0; i < this.winCombos.length; i++) {
    //     for (var j = 0; j < this.currentPlayer.marked.length; j++) {
    //       if (this.winCombos[i].includes(this.currentPlayer.marked[j])) {
          
    //       }
    //         console.log(this.currentPlayer.id, this.winCombos[1])
    //         console.log(this.currentPlayer.marked[j]);
    //         console.log(this.currentPlayer.id,'made it')
    //     }
    //   }
    // }

    // var match = 0 
    // console.log(this.currentPlayer)
    // if (this.currentPlayer.marked.length > 2) {
    //   for (var i = 0; i < this.winCombos.length; i++ ) {
    //     for (var j = 0; j < this.currentPlayer.marked.length; JSON++) {
    //       if (this.currentPlayer.marked[i].includes(this.winCombos[j])) {
    //         match++
    //         console.log(this.currentPlayer.id, this.winCombos[i])
    //         console.log(this.currentPlayer.id, match)
    //         console.log(this.currentPlayer.id,'made it')
    //       }
    //     } 
    //   }



      // for (var i = 0; i < this.winCombos.length; i++) {
      //   console.log(this.currentPlayer.marked);
      //   if (this.currentPlayer.marked.includes(this.winCombos[i])) {
      //     console.log('it works')
      //     this.currentPlayer.wins++;
      //   } else {
      //     console.log(this.winCombos[1])
      //     console.log(this.currentPlayer.marked.includes(this.winCombos[i]));
      //   };
      // };
    // }
};
