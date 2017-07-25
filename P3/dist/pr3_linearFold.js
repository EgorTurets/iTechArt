"use strict";

/**
 * Created by yahor.turets on 25.07.2017.
 */

function LinearFoldWithPolynomMul(array, callback, initalValue) {
    var foldingArray = [];
    var previousValue = initalValue ? initalValue : 0;
    var currentValue;

    for (var index = 0; index < array.length * 2 - 1; index++) {
        currentValue = array[index];
        previousValue = callback(previousValue, currentValue, index, array);
        foldingArray.push(previousValue);
    }

    return foldingArray;
}

//functions just for test
function PolynomSubMul(previousValue, currentValue, index, array) {
    var j = Math.max(0, index + 1 - array.length);
    var i = Math.min(index, array.length - 1);
    var elementSum = 0;
    for (j; j <= i; j++) {
        elementSum += array[j] * array[index - j];
    }
    return elementSum;
}
//# sourceMappingURL=pr3_linearFold.js.map