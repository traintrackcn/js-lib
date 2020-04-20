"use strict";

var _index = require("../index");

// import { caller } from '../../index';
function jiminyCricket() {
  return (0, _index.caller)();
}

it('', function () {
  expect(jiminyCricket()).toBe('jiminyCricket');
});
