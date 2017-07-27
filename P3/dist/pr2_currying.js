"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by yahor.turets on 24.07.2017.
 */

function Curry(func) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return function (nextArg) {
        var allArgs = args.concat(nextArg);
        if (allArgs.length < func.length) {

            return Curry.apply(undefined, [func].concat(_toConsumableArray(allArgs)));
        } else {

            return func.apply(undefined, _toConsumableArray(allArgs));
        }
    };
};

//Just for test
function QuadraticEq(a, b, c, x) {

    return a * Math.pow(x, 2) + b * x + c;
}
//# sourceMappingURL=pr2_currying.js.map