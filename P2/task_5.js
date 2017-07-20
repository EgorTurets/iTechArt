/**
 * Created by yahor.turets on 20.07.2017.
 */
function Sort(inputString, sortType) {
    var regExp = /[^0-9,. \-]/;
    if (regExp.test(inputString)) return "Invalid input!";
    var array = inputString.split(",");
    for (i=0; i < array.length; i++) {
        if (!isNaN(array[i])) {array[i] = +array[i];}
    }
    switch (sortType) {
        case "Stupid": return StupidSort(array, 0); break;
        case "Bubble": return BubbleSort(array, array.length); break;
        case "Solomon": return Solomon(array); break;
        case "NoName2": return NoName2(array); break;
        default: return "Something is bad";
    }
}

function StupidSort(inputArray, i) {
    for (i ; i < inputArray.length; i++) {
        if (inputArray[i-1] > inputArray[i]) {
            inputArray = ReplaceElement(inputArray, i, i-1);
            inputArray = StupidSort(inputArray, i-1);
        }
    }
    return inputArray;
}

function BubbleSort(inputArray, lastSortedElement) {
    for (i = 1; i < lastSortedElement; i++) {
        if (inputArray[i-1] > inputArray[i]) {
            inputArray = ReplaceElement(inputArray, i, i-1);
        }
    }
    if (lastSortedElement > 1) { BubbleSort(inputArray, lastSortedElement-1); }
    return inputArray;
}

function Solomon(inputArray) {
    var min = 0, max = 0;
    //find MIN and MAX values
    for (i = 0 ; i < inputArray.length; i++) {
        if (inputArray[i] > max) max = inputArray[i];
        if (inputArray[i] < min) min = inputArray[i];
    }
    var delta = (max - min) / inputArray.length;

    //create 2D array for approximately position
    var newIndex = [];
    for(var i=0; i<inputArray.length+1; i++){
        newIndex[i] = [];
    }

    //approximately placing
    for (i = 0 ; i < inputArray.length; i++) {
        newIndex[Math.floor((inputArray[i] - min) / delta)].push(inputArray[i]);
    }
    //sort inside approximately place
    for (i = 0 ; i < inputArray.length; i++) {
        newIndex[i] = BubbleSort(newIndex[i], newIndex[i].length)
    }
    //finally sort
    var outputArray = [];
    var outArrayIndex = 0;
    for (i = 0 ; i < newIndex.length; i++) {
        for (j = 0 ; j < newIndex[i].length; j++) {
            outputArray[outArrayIndex] = newIndex[i][j];
            outArrayIndex++;
        }
    }
    return outputArray;
}

function NoName2(inputArray) {

}

function ReplaceElement(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}