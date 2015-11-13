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
            alert('changed now');
        })
    }, {
        key: 'log',
        value: function log() {
            var sa = (function () {
                alert('sa m');
            })();

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
        alert('changed now');
    }

    log() {
        var sa = (() => {
            alert('sa m');
        })();

        console.log('log ed');
    }
}

module.exports = GetMe;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxia3BcXHByb2plY3RzXFxnaXRcXGZyYW1ld29ya3NcXGVzNlxcbm9kZV9tb2R1bGVzXFxndWxwLWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovYmtwL3Byb2plY3RzL2dpdC9mcmFtZXdvcmtzL2VzNi9zcmMvZmFrZV8xZGQwYzI3ZC5qcyIsImM6L2JrcC9wcm9qZWN0cy9naXQvZnJhbWV3b3Jrcy9lczYvc3JjL2ZpcnN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSBSYWphbiBvbiAxMC8xMS8yMDE1LlxyXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEdldE1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHZXRNZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdldE1lKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoR2V0TWUsIFt7XG4gICAgICAgIGtleTogJ2FsZXJ0JyxcbiAgICAgICAgdmFsdWU6IChmdW5jdGlvbiAoX2FsZXJ0KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBhbGVydCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2FsZXJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFsZXJ0LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYWxlcnQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBhbGVydDtcbiAgICAgICAgfSkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWxlcnQoJ2NoYW5nZWQgbm93Jyk7XG4gICAgICAgIH0pXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2cnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9nKCkge1xuICAgICAgICAgICAgdmFyIHNhID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnc2EgbScpO1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZyBlZCcpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEdldE1lO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBHZXRNZTtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ZpcnN0ID0gcmVxdWlyZShcIi4vZmlyc3RcIik7XG5cbnZhciBfZmlyc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmlyc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZmlyc3RPYmplY3QgPSBuZXcgX2ZpcnN0Mi5kZWZhdWx0KCk7XG5cbmZpcnN0T2JqZWN0LmxvZygpO1xuZmlyc3RPYmplY3QuYWxlcnQoKTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBSYWphbiBvbiAxMC8xMS8yMDE1LlxyXG4gKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuY2xhc3MgR2V0TWUge1xyXG5cclxuICAgIGFsZXJ0KCkge1xyXG4gICAgICAgIGFsZXJ0KCdjaGFuZ2VkIG5vdycpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZygpIHtcclxuICAgICAgICB2YXIgc2EgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydCgnc2EgbScpO1xyXG4gICAgICAgIH0pKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2cgZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHZXRNZTsiXX0=

//# sourceMappingURL=all.js.map
