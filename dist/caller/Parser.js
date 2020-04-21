"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function StackParser(stack) {
    _classCallCheck(this, StackParser);

    this.setStack(stack);
  }

  _createClass(StackParser, [{
    key: "setStack",
    value: function setStack(value) {
      this._stack = value;
    }
  }, {
    key: "getStack",
    value: function getStack() {
      return this._stack;
    }
  }, {
    key: "getLines",
    value: function getLines() {
      if (!this._lines) {
        var stack = this.getStack();
        this._lines = stack.split('at ');
      }

      return this._lines;
    }
  }, {
    key: "getLine2",
    value: function getLine2() {
      if (!this._line2) {
        var lines = this.getLines();
        this._line2 = lines[2];
      }

      return this._line2;
    }
  }, {
    key: "getLine3",
    value: function getLine3() {
      if (!this._line3) {
        var lines = this.getLines();
        this._line3 = lines[3];
      }

      return this._line3;
    }
  }, {
    key: "getInstanceFromLine2",
    value: function getInstanceFromLine2() {
      try {
        var line = this.getLine2(); // console.log('line ->', line);

        var regex = /\w+./i;
        var matches = line.match(regex);
        console.log('matches ->', matches);
        var result = line;

        if (matches && matches.length) {
          result = matches[0];
          var endIdx = result.length - 1;
          result = result.substring(0, endIdx);
        }

        return result;
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getFunctionFromLine3",
    value: function getFunctionFromLine3() {
      try {
        var line = this.getLine3(); // console.log('line ->', line);

        var regex = /\w+\s/i;
        var matches = line.match(regex);
        console.log('matches ->', matches);
        var result = line;

        if (matches && matches.length) {
          result = matches[0];
          var endIdx = result.length - 1;
          result = result.substring(0, endIdx);
        }

        return result;
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getScenario0",
    value: function getScenario0() {
      var line = this.getLine2();
      var result = line.split(' ')[0];
      return result;
    }
  }, {
    key: "getScenario1",
    value: function getScenario1() {
      var instance = this.getInstanceFromLine2();
      var func = this.getFunctionFromLine3();
      return "".concat(instance, ".").concat(func);
    }
  }, {
    key: "parse",
    value: function parse() {
      var line2 = this.getLine2();
      var result;

      if (line2.indexOf('.caller') > 0) {
        result = this.getScenario1();
      } else {
        result = this.getScenario0();
      }

      return result;
    }
  }]);

  return StackParser;
}();
