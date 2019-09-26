import Board from "./board";

const PLAYER_X = "X";
const PLAYER_O = "O";
const players = [PLAYER_X, PLAYER_O];

// let resultsCounter = {
//   [X]: 0,
//   [O]: 0
// };

class Game {
  p: any;
  currentPlayer: string;
  winner: string | null = null;
  board: Board;

  constructor(p: any) {
    this.p = p;
    this.currentPlayer = p.random(players);
    this.board = new Board(p);
  }

  reset = () => {
    this.board = new Board(this.p);
    this.currentPlayer = this.p.random(players);
    this.winner = null;
  };

  draw = () => {
    this.board.draw();
    this.drawStatus();
  };

  mouseClicked = () => {
    if (this.winner !== null) {
      return;
    }

    if (
      this.p.mouseX < this.board.boardW &&
      this.p.mouseY < this.board.boardH
    ) {
      const somethingChanged = this.board.mouseClicked(this.currentPlayer);
      if (somethingChanged) {
        this.winner = this.board.checkWinner();

        if (this.winner === null) {
          this.currentPlayer =
            this.currentPlayer === PLAYER_O ? PLAYER_X : PLAYER_O;
        }
      }
    }
  };

  doubleClicked = () => {
    if (this.winner !== null) {
      this.reset();
    }
  };

  mouseMoved = () => {
    if (
      this.winner !== null ||
      (this.p.mouseX > 0 &&
        this.p.mouseY > 0 &&
        this.p.mouseX < this.board.boardW &&
        this.p.mouseY < this.board.boardH)
    ) {
      this.p.cursor(this.p.HAND);
    } else {
      this.p.cursor(this.p.ARROW);
    }
  };

  drawStatus = () => {
    this.p.textSize(15);
    this.p.fill(255);
    this.p.strokeWeight(0);
    this.p.textAlign(this.p.LEFT, this.p.CENTER);
    this.p.text(
      "Current Player: " + this.currentPlayer,
      20,
      this.board.boardH + 30
    );
    if (this.winner !== null) {
      if (this.winner === PLAYER_X) {
        this.p.fill(255, 0, 0);
      } else if (this.winner === PLAYER_O) {
        this.p.fill(255, 255, 153);
      } else {
        // TIE
        this.p.fill(0, 255, 255);
      }
      this.p.textAlign(this.p.LEFT, this.p.CENTER);
      this.p.text(
        "Winner: " + this.winner,
        this.p.width - 100,
        this.board.boardH + 30
      );

      this.p.textAlign(this.p.CENTER, this.p.CENTER);
      this.p.fill(0, 255, 255);
      this.p.text(
        "Double click to re-match",
        Math.floor(this.board.boardW / 2),
        this.board.boardH + 50
      );
    }
  };
}

export default Game;
