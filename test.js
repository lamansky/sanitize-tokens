'use strict'

const assert = require('assert')
const isArrayWith = require('is-array-with')
const sanitizeTokens = require('.')

describe('sanitizeTokens()', function () {
  it('should split tokens in a string', function () {
    assert(isArrayWith(sanitizeTokens('a b c'), 'a', 'b', 'c'))
  })

  it('should find and split tokens in nested arrays of strings', function () {
    assert(isArrayWith(sanitizeTokens(['this is', [['a'], 'test']]), 'this', 'is', 'a', 'test'))
  })

  it('should ignore what cannot be converted to a string', function () {
    assert(isArrayWith(sanitizeTokens(['token', {}]), 'token'))
  })

  it('should throw if non-string found and `elseThrow` is true', function () {
    assert.throws(() => { sanitizeTokens(['string', {}], {elseThrow: true}) })
  })

  it('should ignore null or undefined even if `elseThrow` is true', function () {
    assert(isArrayWith(sanitizeTokens([null, undefined], {elseThrow: true}))) // eslint-disable-line no-undefined
  })

  it('should allow duplicate strings', function () {
    assert(isArrayWith(sanitizeTokens(['test', 'test']), 'test', 'test'))
  })

  it('should remove duplicate strings if `unique` is `true`', function () {
    assert(isArrayWith(sanitizeTokens(['test', 'test'], {unique: true}), 'test'))
  })
})
