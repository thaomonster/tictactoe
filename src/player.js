class Player {
  constructor(id, token, turn) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.gameWon = false;
    this.turn = turn;
  };

  saveWinsToStorage() {
    localStorage.setItem(`${this.id}-wins`, JSON.stringify(this.wins));
  };

  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(`${this.id}-wins`)) || 0;
  };
};