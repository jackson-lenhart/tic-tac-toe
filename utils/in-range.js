'use strict'

let inRange = (ns, min, max) =>
  ns.reduce((acc, n) =>
    (n >= min && n <= max) && acc
  , true)


module.exports = inRange
