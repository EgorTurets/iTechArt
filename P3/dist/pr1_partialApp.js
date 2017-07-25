"use strict";

/**
 * Created by yahor.turets on 24.07.2017.
 */

function G1(a1, a2, a3) {
    for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        args[_key - 3] = arguments[_key];
    }

    return "arg1: " + a1 + ", arg2: " + a2 + ", arg3: " + a3 + ", and " + args.length + " remaining arguments: " + args;
}

function F1(func) {
    for (var _len2 = arguments.length, fixedArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        fixedArgs[_key2 - 1] = arguments[_key2];
    }

    var partialFunc = func.bind.apply(func, [null].concat(fixedArgs));
    return partialFunc;
}

// not rigth functions
// function F1 (...args) {
//     var partialFunc = G1.bind(null, ...args);
//     return partialFunc;
// }
//
// function H1(...args) {
//     var partialFunc = G1.bind(null, "some arg");
//     return partialFunc(...args);
// }
//# sourceMappingURL=pr1_partialApp.js.map