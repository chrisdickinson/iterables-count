'use strict'

module.exports = count

function * count (from, step) {
  if (arguments.length === 0) {
    from = 0
    step = 1
  } else if (arguments.length === 1) {
    step = 1
  }

  if (isNaN(from) || from === null || from === false) {
    throw new TypeError('Expected a number as the first argument')
  }

  if (isNaN(step) || step === null || step === false) {
    throw new TypeError('Expected a number as the second argument')
  }

  while (true) {
    yield from
    from += step
  }
}
