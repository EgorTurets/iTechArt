"use strict";

/**
 * Created by yahor.turets on 25.07.2017.
 */

function NewArrayCreator(func, array) {
    var newArr = array.map(func);
    return newArr;
}

//functions for tests
function Sqad(a) {
    return Math.pow(a, 2);
}

function StringInfo(a, i) {
    return "element " + i + " = " + a;
}
//# sourceMappingURL=pr5_map.js.map