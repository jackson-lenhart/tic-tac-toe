'use strict'

let buildBoard = require('./modules/build-board')
let renderBoard = require('./modules/render-board')
let move = require('./modules/move')
let gameResult = require('./modules/game-result')

let { prompt, rlClose } = require('./utils/rl')
let replicate = require('./utils/replicate')

async function start() {
  try {
    let board = buildBoard()
    let result = null
    while (!result) {
      console.log(
        replicate('-', 66).join('') +
        '\n' + renderBoard(board)
      )
      let nextMove =
        await prompt(
          'Where would you like to move?\n' +
          'Format your move like this: row,column\n'
        )

      let [i, j] =
        nextMove.split(',')
          .map(x => parseInt(x, 10) - 1)

      board = move(board, i, j)
      result = gameResult(board)
    }

    console.log(
      replicate('-', 66).join('') +
      '\n' + renderBoard(board) +
      '\n' + 'THE END.\n' +
      (result === true ?
        'Tie game!'
        : 'Won by ' + result)
    )

    let playAgain =
      await prompt(
        'Would you like to play again?\n' +
        'y for yes, n for no\n'
      )

    return playAgain === 'y' ?
      start() : rlClose()
  } catch (e) {
    rlClose()
    throw e
  }
}

start()
  .then(() => console.log('Thanks for playing!'))
  .catch(err => console.error(err))
