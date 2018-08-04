'use strict'

let readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let prompt = q =>
  new Promise(resolve =>
    rl.question(q, a => resolve(a))
  )

let rlClose = () => rl.close()

module.exports = {
  prompt,
  rlClose
}
