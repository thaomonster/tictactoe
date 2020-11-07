class Game {
  constructor() {
    this.playerOne = new Player('p1', 'harry-potter', true);
    this.playerTwo = new Player('p2', 'voldermort', false);
    this.board = ['', '', '', '', '', '', '', '', ''];
  };

  switchPlayer() {
    if (this.playerOne.turn === true) {
      this.playerTwo.turn === false;
    } else if (this.playerTwo.turn === true) {
      this.playerOne.turn === false;
    };
  };
};