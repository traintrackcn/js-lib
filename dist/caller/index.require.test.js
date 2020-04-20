"use strict";

var _require = require('../index'),
    caller = _require.caller;

function jiminyCricket() {
  return caller();
}

it('', function () {
  expect(jiminyCricket()).toBe('jiminyCricket');
});
