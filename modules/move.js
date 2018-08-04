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
  moveTaken(board, i, j) ? board
    : board.map((row, _i) =>
      _i === i ?
        row.map((x, _j) =>
          _j === j ? turn(board) : x)
        : row)

module.exports = move
