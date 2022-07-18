const inputs = require("fs").readFileSync(0).toString().split("\n");

const size = inputs[0].split(" ").map((num) => Number(num));
const width = size[1];
const height = size[0];
inputs.shift();

const w = "W";
const b = "B";

let gap = null;

const makeBoard = (isBlack) => {
  const board = [];
  for (let i = 0; i < 8; i++) {
    const line = [];
    for (let j = 0; j < 8; j++) {
      line.push((i + j) % 2 === 0 ? (isBlack ? b : w) : isBlack ? w : b);
    }

    board.push(line);
  }
  return board;
};

const blackBoard = makeBoard(true);
const whiteBoard = makeBoard(false);

const cutBoard = (xStart, yStart) => {
  const board = [];

  for (let i = yStart; i < yStart + 8; i++) {
    const line = [...inputs[i].split("")];
    const _line = [];
    for (let j = xStart; j < xStart + 8; j++) {
      _line.push(line[j]);
    }

    board.push(_line);
  }

  if (checkBoard(board)) {
    if (xStart === width - 8 && yStart === height - 8) {
      console.log(gap);
    } else {
      if (xStart === width - 8) {
        return cutBoard(0, yStart + 1);
      } else {
        return cutBoard(xStart + 1, yStart);
      }
    }
  }
};

const checkBoard = (board) => {
  let w_gap = 0;
  let b_gap = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] !== whiteBoard[i][j]) w_gap++;
    }
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] !== blackBoard[i][j]) b_gap++;
    }
  }

  const _gap = Math.min(w_gap, b_gap);
  if (gap === null || _gap < gap) {
    gap = _gap;
  }
  return true;
};

cutBoard(0, 0);
