'use strict'

let renderRow = (row, l, index) =>
  row.reduce((acc, x, i) =>
    acc + (i === (l - 1) ? x + '\n' : x + ' | ')
  , '' + (index + 1) + ' ')

let renderBoard = board =>
  '  1   2   3\n' +
  board.reduce((acc, row, i) =>
    acc + renderRow(row, row.length, i)
  , '')

module.exports = renderBoard
