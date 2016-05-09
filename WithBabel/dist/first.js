/**
 * Created by kalpana on 10/11/15.
 */

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var myClass = (function () {
    function myClass() {
        _classCallCheck(this, myClass);
    }

    _createClass(myClass, [{
        key: 'log',
        value: function log() {
            console.log('its log');
        }
    }, {
        key: 'alert',
        value: function alert() {
            console.log('this is alert');
        }
    }]);

    return myClass;
})();

module.exports = myClass;