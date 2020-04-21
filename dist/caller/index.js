"use strict";

var StackParser = require('./Parser');

module.exports = function () {
  try {
    throw new Error();
  } catch (e) {
    try {
      var stack = e.stack;
      var parser = new StackParser(stack);
      return parser.parse();
    } catch (e) {
      return '';
    }
  }
};
