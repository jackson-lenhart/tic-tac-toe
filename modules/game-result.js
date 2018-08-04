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

let findDiagonal = board =>
  [
    [
      [0, 0], [1, 1], [2, 2]
    ],
    [
      [0, 2], [1, 1], [2, 0]
    ]
  ].reduce((acc, d) =>
    acc || d.reduce((_acc, p) =>
      _acc && (board[p[0]][p[1]] !== '-') &&
      (board[p[0]][p[1]] === board[d[0][0]][d[0][1]])
    , true)
  , null) ? board[1][1] : null

let winner = board =>
  findRow(board) || findColumn(board) || findDiagonal(board)

let gameResult = board =>
  winner(board) || boardFull(board)

module.exports = gameResult
