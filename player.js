class Player {
  constructor(id, token, turn) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.gameWon = false;
    this.turn = turn;
    // this.marked = [];
  };

  saveWinsToStorage() {
    localStorage.setItem(`${this.id}-wins`, JSON.stringify(this.wins));
  };

  retrieveWinsFromStorage() {
    JSON.parse(localStorage.getItem(`${this.id}-wins`))
  };
};