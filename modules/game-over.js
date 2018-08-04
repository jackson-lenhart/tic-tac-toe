'use strict'

let boardFull = board =>
  board.reduce((acc, r) =>
    acc && r.reduce((_acc, x) =>
      _acc && (x !== '-')
    , true)
  , true)

let findRow = board =>
  board.reduce((acc, r) =>
    r.reduce((_acc, x) =>
      (x !== '-') && (x === r[0]) && _acc
    , true) ? r[0] : acc
  , null)

let findColumn = board =>
  board.reduce((acc, r, j) =>
    acc || findRow([r.map((_, i) => board[i][j])])
  , null)

let findDiagonal = board => null

let winner = board =>
  findRow(board) || findColumn(board) || findDiagonal(board)

let gameOver = board =>
  winner(board) || boardFull(board)

module.exports = gameOver
