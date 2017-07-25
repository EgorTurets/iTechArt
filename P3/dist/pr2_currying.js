"use strict";

/**
 * Created by yahor.turets on 24.07.2017.
 */

var currying = function () {
    function QuadraticEq(a, b, c, x) {
        return a * Math.pow(x, 2) + b * x + c;
    }

    function Curry() {
        return AddA.bind(null);
    }

    function AddA() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        var partFuncB = AddB.bind(null, a);
        return partFuncB;
    }

    function AddB(a) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

        var partFuncC = AddC.bind(null, a, b);
        return partFuncC;
    }

    function AddC(a, b) {
        var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

        var partFuncX = AddX.bind(null, a, b, c);
        return partFuncX;
    }

    function AddX(a, b, c) {
        var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 6;

        return QuadraticEq(a, b, c, x);
    }

    return {
        equation: QuadraticEq,
        curry: Curry
    };
}();
//# sourceMappingURL=pr2_currying.js.map