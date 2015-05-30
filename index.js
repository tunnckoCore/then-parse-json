/*!
 * then-parse-json <https://github.com/tunnckoCore/then-parse-json>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var JsonPromise = require('native-or-bluebird')

module.exports = function thenParseJson (input) {
  var promise = JsonPromise.resolve(input)

  return promise.then(JSON.parse)
}
