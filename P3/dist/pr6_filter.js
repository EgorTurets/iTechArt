"use strict";

/**
 * Created by yahor.turets on 25.07.2017.
 */

function Filter(array, callback) {
    var filteredArray = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

//functions for tests
function TestParity(array) {
    return Filter(array, function (i) {
        return i % 2 === 0 ? true : false;
    });
}

function HasLetter(element) {
    return (/[a-zA-Z]/i.test(element + "")
    );
}
//# sourceMappingURL=pr6_filter.js.map