class Game {
  constructor() {
    this.playerOne = new Player('p1', 'harrypotter.jpg', true);
    this.playerTwo = new Player('p2', 'voldemort.png', false);
    this.board = ['', '', '', '', '', '', '', '', ''];
  };

  switchPlayer() {
    if (this.playerOne.turn) {
      this.playerOne.turn = false;
      this.playerTwo.turn = true;
    } else {
      this.playerOne.turn = true;
      this.playerTwo.turn = false;
    };
  };
};
