(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by Rajan on 10/11/2015.
 */

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetMe = (function () {
    function GetMe() {
        _classCallCheck(this, GetMe);
    }

    _createClass(GetMe, [{
        key: 'alert',
        value: (function (_alert) {
            function alert() {
                return _alert.apply(this, arguments);
            }

            alert.toString = function () {
                return _alert.toString();
            };

            return alert;
        })(function () {
            alert('alert action');
        })
    }, {
        key: 'log',
        value: function log() {
            console.log('log ed');
        }
    }]);

    return GetMe;
})();

module.exports = GetMe;
"use strict";

var _first = require("./first");

var _first2 = _interopRequireDefault(_first);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var first = require('./first');
var firstObject = new _first2.default();

firstObject.log();
firstObject.alert();
},{"./first":2}],2:[function(require,module,exports){
/**
 * Created by Rajan on 10/11/2015.
 */

"use strict";

class GetMe {

    alert() {
        alert('alert action');
    }
    log() {
        console.log('log ed');
    }
}

module.exports = GetMe;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYWxwYW5hL3Byb2plY3RzL2dpdC9lczZ0ZXN0L1dpdGhHdWxwL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9rYWxwYW5hL3Byb2plY3RzL2dpdC9lczZ0ZXN0L1dpdGhHdWxwL3NyYy9mYWtlXzM2NGQzNDJmLmpzIiwiL1VzZXJzL2thbHBhbmEvcHJvamVjdHMvZ2l0L2VzNnRlc3QvV2l0aEd1bHAvc3JjL2ZpcnN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJhamFuIG9uIDEwLzExLzIwMTUuXHJcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgR2V0TWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdldE1lKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2V0TWUpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhHZXRNZSwgW3tcbiAgICAgICAga2V5OiAnYWxlcnQnLFxuICAgICAgICB2YWx1ZTogKGZ1bmN0aW9uIChfYWxlcnQpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFsZXJ0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYWxlcnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWxlcnQudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9hbGVydC50b1N0cmluZygpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0O1xuICAgICAgICB9KShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhbGVydCgnYWxlcnQgYWN0aW9uJyk7XG4gICAgICAgIH0pXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2cnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9nKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZyBlZCcpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEdldE1lO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBHZXRNZTtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ZpcnN0ID0gcmVxdWlyZShcIi4vZmlyc3RcIik7XG5cbnZhciBfZmlyc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmlyc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vL3ZhciBmaXJzdCA9IHJlcXVpcmUoJy4vZmlyc3QnKTtcbnZhciBmaXJzdE9iamVjdCA9IG5ldyBfZmlyc3QyLmRlZmF1bHQoKTtcblxuZmlyc3RPYmplY3QubG9nKCk7XG5maXJzdE9iamVjdC5hbGVydCgpOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJhamFuIG9uIDEwLzExLzIwMTUuXHJcbiAqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBHZXRNZSB7XHJcblxyXG4gICAgYWxlcnQoKSB7XHJcbiAgICAgICAgYWxlcnQoJ2FsZXJ0IGFjdGlvbicpO1xyXG4gICAgfVxyXG4gICAgbG9nKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2cgZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHZXRNZTsiXX0=

//# sourceMappingURL=all.js.map
