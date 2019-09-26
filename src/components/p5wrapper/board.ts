const E = ""; // emtpy
const X = "X";
const O = "O";
const emptyBoard = [[E, E, E], [E, E, E], [E, E, E]];

class Board {
  p: any;
  board: string[][] = [];
  config: {
    cw: number;
  } = { cw: 0 };
  boardW: number = 300;
  boardH: number = 300;

  constructor(p: any) {
    this.p = p;
    this.board = this.newBoard();
    // cell width
    this.config.cw = this.boardW / this.board.length;
  }

  newBoard = (): string[][] => {
    return emptyBoard.map(arr => {
      return arr.slice();
    });
  };

  mouseClicked = (currentPlayer: string): boolean => {
    const row = Math.floor(this.p.mouseX / this.config.cw);
    const col = Math.floor(this.p.mouseY / this.config.cw);
    if (
      row >= 0 &&
      row < this.board.length &&
      col >= 0 &&
      col < this.board.length &&
      this.board[row][col] === E
    ) {
      this.board[row][col] = currentPlayer;
      return true;
    }
    return false;
  };

  checkWinner = (): string | null => {
    let winner = null;
    // check rows
    for (const row in this.board) {
      if (
        this.board[row][0] !== E &&
        this.board[row][0] === this.board[row][1] &&
        this.board[row][1] === this.board[row][2]
      ) {
        winner = this.board[row][0];
        break;
      }
    }
    if (winner !== null) {
      return winner;
    }

    // check cols
    for (let col = 0; col < this.board.length; col++) {
      if (
        this.board[0][col] !== E &&
        this.board[0][col] === this.board[1][col] &&
        this.board[1][col] === this.board[2][col]
      ) {
        winner = this.board[0][col];
        break;
      }
    }
    if (winner !== null) {
      return winner;
    }

    // check diagonals
    const center = Math.floor(this.board.length / 2);
    const centerVal = this.board[center][center];
    if (centerVal === E) {
      return null;
    }
    let d1 = true;
    let d2 = true;
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[row].length; col++) {
        const val = this.board[row][col];
        if (row === col) {
          if (val !== centerVal) {
            d1 = false;
          }
        }
        if (row + col === this.board.length - 1) {
          if (val !== centerVal) {
            d2 = false;
          }
        }
      }
    }

    if (d1 || d2) {
      winner = centerVal;
    }

    if (winner === null) {
      const someEmpty = this.board.find(
        row => row.find(cell => cell === E) === E
      );
      if (!someEmpty) {
        winner = "TIE";
      }
    }

    return winner;
  };

  draw = () => {
    const { cw } = this.config;
    // draw board lines
    this.p.strokeWeight(1);
    this.p.stroke(255);
    this.p.line(0, cw, this.boardW, cw);
    this.p.line(0, cw * 2, this.boardW, cw * 2);
    this.p.line(0, cw * 3, this.boardW, cw * 3);

    this.p.line(cw, 0, cw, this.boardH);
    this.p.line(cw * 2, 0, cw * 2, this.boardH);

    // draw board values
    this.p.strokeWeight(4);
    this.p.colorMode(this.p.RGB, 255, 255, 255, 1);

    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[row].length; col++) {
        const val = this.board[row][col];
        if (val === X) {
          this.p.stroke(255, 0, 0);
          this.p.line(
            row * cw + cw / 4,
            col * cw + cw / 4,
            row * cw + cw - cw / 4,
            col * cw + cw - cw / 4
          );
          this.p.line(
            row * cw + cw - cw / 4,
            col * cw + cw / 4,
            row * cw + cw / 4,
            col * cw + cw - cw / 4
          );
        } else if (val === O) {
          this.p.noFill();
          this.p.stroke(255, 255, 153);
          this.p.circle(row * cw + cw / 2, col * cw + cw / 2, cw / 2);
        }
      }
    }
  };
}

export default Board;
