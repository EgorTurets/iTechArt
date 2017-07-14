/**
 * Created by yahor.turets on 14.07.2017.
 */
var ArrayProcessing = {
    inputArray: null,
    outputMessage: null,

    getMaxSubSum: function (stringWithArray) {
        var array = stringWithArray.split(', ');
        var maxSum = 0;     //зданичение для хранения максимальной суммы
        var sum = 0;        //знач. для посчета текущей суммы

        for (var i = 0; i < array.length; i++){

        }
    },

    Search: function () {



        t1_output.innerHTML
    },

    GetMaxGrowingArray: function (stringWithArray) {
        var array = stringWithArray.split(', ');
        var minIndex, maxIndex = null;
        var currentMinIndex, currentMaxIndex = null;
        var maxLength = 0;

        for (i = 1; i < array.length; i++) {
            var tmp1 = +array[i];
            var tmp2 = +array[i-1];
            if (+array[i] > +array[i-1]) {
                if (currentMinIndex == null) {
                    currentMinIndex = i-1;
                    currentMaxIndex = i;
                }
                else {currentMaxIndex = i;}
            }
            else {
                if (maxLength < currentMaxIndex-currentMinIndex) {
                    maxLength = currentMaxIndex-currentMinIndex;
                    minIndex = currentMinIndex;
                    maxIndex = currentMaxIndex;
                }
                currentMinIndex = null;
                currentMaxIndex = null;

            }
        }




        return array.slice(minIndex, maxIndex+1);
    }
}