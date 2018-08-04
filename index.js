'use strict'

let buildBoard = require('./modules/build-board')
let renderBoard = require('./modules/render-board')
let move = require('./modules/move')
let gameOver = require('./modules/game-over')

let { prompt, rlClose } = require('./utils/rl')
let replicate = require('./utils/replicate')
let delay = require('./utils/delay')

async function start() {
  console.log(
    '' + replicate('-', 22).join('') +
    'WELCOME-TO-TIC-TAC-TOE' +
    replicate('-', 22).join('')
  )

  try {
    await delay(0.5)

    let board = buildBoard()
    let result = null
    while (!result) {
      console.log(replicate('-', 66).join(''))
      console.log(renderBoard(board))
      let nextMove =
        await prompt(
          'Where would you like to move?\n' +
          'Format your move like this: row,column\n'
        )

      let [i, j] =
        nextMove.split(',')
          .map(x => parseInt(x, 10) - 1)

      board = move(board, i, j)
      result = gameOver(board)
    }

    console.log(replicate('-', 66).join(''))
    console.log(renderBoard(board))
    console.log(
      'THE END.\n' +
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
    console.error(e)
  }
}

start()
  .then(() => console.log('Thanks for playing!'))
  .catch(err => console.error(err))
