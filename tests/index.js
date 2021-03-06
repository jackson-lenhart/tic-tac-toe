'use strict'

let zip = require('../utils/zip')

let move = require('../modules/move')
let buildBoard = require('../modules/build-board')
let gameResult = require('../modules/game-result')

zip([
  false,
  'X',
  'X',
  'X',
  'O',
  'X',
  'O'
], [
  () => gameResult(buildBoard()),
  () =>
    gameResult(
      move(
        move(
          move(
            move(
              move(
                buildBoard(), 0, 0
              ), 1, 0
            ), 0, 1
          ), 1, 1
        ), 0, 2
      )
    ),
  () =>
    gameResult(
      move(
        move(
          move(
            move(
              move(
                buildBoard(), 0, 0
              ), 2, 2
            ), 1, 0
          ), 0, 2
        ), 2, 0
      )
    ),
  () =>
    gameResult(
      move(
        move(
          move(
            move(
              move(
                buildBoard(), 0, 1
              ), 2, 2
            ), 1, 1
          ), 0, 2
        ), 2, 1
      )
    ),
  () =>
    gameResult(
      move(
        move(
          move(
            move(
              move(
                move(
                  buildBoard(), 0, 1
                ), 2, 2
              ), 1, 1
            ), 2, 1
          ), 1, 2
        ), 2, 0
      )
    ),
  () =>
    gameResult(
      move(
        move(
          move(
            move(
              move(
                buildBoard(), 0, 0
              ), 2, 1
            ), 1, 1
          ), 0, 2
        ), 2, 2
      )
    ),
  () =>
    gameResult(
      move(
        move(
          move(
            move(
              move(
                move(
                  buildBoard(), 2, 2
                ), 0, 2
              ), 1, 0
            ), 1, 1
          ), 0, 0
        ), 2, 0
      )
    )
]).forEach((pair, i) =>
  pair[0] === pair[1]() ?
    console.log('\x1b[32m%s\x1b[0m', `Test ${i + 1} passed`)
    : console.log(
      '\x1b[41m\x1b[37m%s\x1b[0m', `Test ${i + 1} failed` +
      '\n with result:' + pair[1]()
    ))
