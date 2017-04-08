'use strict'

const tap = require('tap')

const count = require('./iterables-count')

function test (name, testCase) {
  return tap.test(name, assert => {
    testCase(assert)
    return Promise.resolve()
  })
}

test('fails if non-number start given', assert => {
  assert.throws(TypeError, () => {
    [...count(null)]
  })
  assert.throws(TypeError, () => {
    [...count(false)]
  })
  assert.throws(TypeError, () => {
    [...count('foo')]
  })
})

test('fails if non-number step given', assert => {
  assert.throws(TypeError, () => {
    [...count(0, null)]
  })
  assert.throws(TypeError, () => {
    [...count(0, false)]
  })
  assert.throws(TypeError, () => {
    [...count(0, 'foo')]
  })
})

test('works as expected', assert => {
  const [one, two, three] = count(0, 10)

  assert.equal(one, 0)
  assert.equal(two, 10)
  assert.equal(three, 20)
})

test('works as expected (no step)', assert => {
  const [one, two, three] = count(0)

  assert.equal(one, 0)
  assert.equal(two, 1)
  assert.equal(three, 2)
})
