'use strict'

let zip = (arr1, arr2) =>
  arr1.map((x, i) => [x, arr2[i]])

module.exports = zip
