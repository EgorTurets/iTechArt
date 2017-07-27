/**
 * Created by yahor.turets on 25.07.2017.
 */

function LinearFold(array, callback, initalValue) {
    var previousValue = initalValue;

    for (let index = 0; index < array.length; index++) {
        previousValue = callback(previousValue, array[index], index, array)
    }
    return previousValue;
}