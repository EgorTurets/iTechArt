"use strict";

/**
 * Created by yahor.turets on 25.07.2017.
 */

function LinearFold(array, callback, initalValue) {
    var previousValue = initalValue ? initalValue : 0;

    for (var index = 0; index < array.length; index++) {
        previousValue = callback(previousValue, array[index], index, array);
    }
    return previousValue;
}
//# sourceMappingURL=pr3_linearFold.js.map