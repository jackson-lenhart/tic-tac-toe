'use strict'

let moveTaken = (board, i, j) =>
  board[i][j] === '-' ? false : true

let turn = board =>
  (board.reduce((acc, row) =>
    acc + row.reduce((_acc, x) =>
      x === '-' ? _acc + 1 : _acc
    , 0)
  , 0)) % 2 === 1 ? 'X' : 'O'

let move = (board, i, j) =>
  [i, j].some(x =>
    x < 0 || x > 2 || isNaN(x)) ?
    board : (moveTaken(board, i, j) ?
      board : board.map((row, _i) =>
        _i === i ?
          row.map((x, _j) =>
            _j === j ? turn(board) : x)
          : row))

module.exports = move
