'use strict'

let replicate = (x, n) =>
  n <= 0 ? [] : [x].concat(replicate(x, n - 1))

module.exports = replicate
