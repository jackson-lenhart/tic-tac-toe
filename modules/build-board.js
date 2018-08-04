'use strict'

let replicate = require('../utils/replicate')

let buildBoard = () =>
  replicate(
    replicate('-', 3)
  , 3)

module.exports = buildBoard
