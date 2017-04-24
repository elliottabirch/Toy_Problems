function makeBoard(n) {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  };
  return board;
}

function moveLeft(i, j, cb) {
  cb(i, j - 1);
}

function moveRight(i, j, cb) {
  cb(i, j + 1);
}

function moveUp(i, j, cb) {
  cb(i - 1, j);
}

function moveDown(i, j, cb) {
  cb(i + 1, j);
}


function robotPaths(n) {
  let count = 0;
  const board = makeBoard(n);

  const buildPath = function (i, j) {
    board.togglePiece(i, j);

    if (i === n && j === n) {
      count++;
    } else {
      if (j !== 0 && !board.hasBeenVisited(i, j - 1)) {
        moveLeft(i, j, buildPath);
      }
      if (i !== 0 && !board.hasBeenVisited(i - 1, j)) {
        moveUp(i, j, buildPath);
      }
      if (j !== n && !board.hasBeenVisited(i, j + 1)) {
        moveRight(i, j, buildPath);
      }
      if (i !== n && !board.hasBeenVisited(i + 1, j)) {
        moveDown(i, j, buildPath);
      }
    }

    board.togglePiece(i, j);
  };

  buildPath(0, 0);

  return count;
}
