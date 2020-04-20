"use strict";

var _index = require("../index");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

it('test fnInClassThatThrowsError', function () {
  try {
    var obj = new Instance();
    obj.fnInClassThatThrowsError();
  } catch (e) {
    expect(e.message).toBe('[ Instance.fnInClassThatThrowsError ] a.callNoExistFN is not a function');
  }
});
it('test arrowFnOutsideObjectThatThrowsError ( arguments not supported )', function () {
  try {
    arrowFnOutsideObjectThatThrowsError();
  } catch (e) {
    expect(e.message).toBe('[ arrowFnOutsideObjectThatThrowsError ] a.callNoExistFN is not a function');
  }
});
it('test arrowFnInClassThatThrowsError ( arguments not supported)', function () {
  try {
    var obj = new Instance();
    obj.arrowFnInClassThatThrowsError();
  } catch (e) {
    expect(e.message).toBe('[ Instance.arrowFnInClassThatThrowsError ] a.callNoExistFN is not a function');
  }
});

var Instance = /*#__PURE__*/function () {
  function Instance() {
    _classCallCheck(this, Instance);

    _defineProperty(this, "arrowFnInClassThatThrowsError", function () {
      try {
        var a = '';
        a.callNoExistFN();
      } catch (e) {
        throw new _index.LITError(e, (0, _index.caller)());
      }
    });

    this.fnInClassThatThrowsError = this.fnInClassThatThrowsError.bind(this);
  }

  _createClass(Instance, [{
    key: "fnInClassThatThrowsError",
    value: function fnInClassThatThrowsError() {
      // console.log('caller() ->', caller());
      try {
        var a = '';
        a.callNoExistFN();
      } catch (e) {
        // console.log('caller() ->', caller());
        // console.log('fnName ->', arguments.callee.name);
        throw new _index.LITError(e, (0, _index.caller)());
      }
    }
  }]);

  return Instance;
}();

var arrowFnOutsideObjectThatThrowsError = function arrowFnOutsideObjectThatThrowsError() {
  try {
    var a = '';
    a.callNoExistFN();
  } catch (e) {
    throw new _index.LITError(e, (0, _index.caller)());
  }
};
