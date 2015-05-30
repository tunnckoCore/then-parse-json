/*!
 * then-parse-json <https://github.com/tunnckoCore/then-parse-json>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isPromise = require('is-promise')
var thenParseJson = require('./index')

test('then-parse-json:', function () {
  test('should return promise', function (done) {
    var fixture = thenParseJson('{"foo":"bar"}')
    var actual = isPromise(fixture)
    var expected = true

    test.equal(actual, expected)
    done()
  })
  test('should pass result to .then', function (done) {
    var promise = thenParseJson('{"foo":"bar"}')

    promise
    .then(function (json) {
      test.deepEqual(json, {foo: 'bar'})
      done()
    })
    .catch(done)
  })
  test('should catch errors with .catch', function (done) {
    var promise = thenParseJson('foo bar baz')

    promise.catch(function (err) {
      test.ifError(!err)
      test.equal(err.message, 'Unexpected token o')
      done()
    })
  })
})
