"use strict";

var fs = require('fs');

var StackParser = require('./Parser');

it('test single function', function () {
  var stack = readAsync('./stack/1');
  var p = new StackParser(stack);
  expect(p.parse()).toBe('jiminyCricket');
});
it('test node instance.function', function () {
  var stack = readAsync('./stack/2');
  var p = new StackParser(stack);
  expect(p.parse()).toBe('RouterHandler.getFile');
});

function readAsync(path) {
  try {
    var filename = require.resolve(path);

    var result = fs.readFileSync(filename, 'utf8');
    return result;
  } catch (e) {
    throw e;
  }
}
