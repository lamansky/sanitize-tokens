'use strict'

const arrify = require('arrify')
const concatEach = require('concat-each')
const flatten = require('@lamansky/flatten')
const isNil = require('is-nil')
const sbo = require('sbo')
const toString = require('2/string')
const w = require('ascii-whitespace')()

module.exports = sbo((tokens, {elseThrow, unique} = {}) =>
  concatEach([], flatten(arrify(tokens)), t => isNil(t) ? [] : toString(t, {elseThrow}).split(w).filter(Boolean), {unique}))
