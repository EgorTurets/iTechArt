/**
 * Created by yahor.turets on 14.07.2017.
 */
var ArrayProcessing = {
    //O(N^2)
    GetMaxSubSum1: function (stringWithNumberArray) {
        var numberArray = ArrayProcessing.ToNumberArrConverter(stringWithNumberArray);
        if (numberArray === false) {
            return 'Invalid input!'
        }
        var maxSum = 0;     //storage for max sum
        var i = 0;

        //---------------------------------------------
        var time1 = Date.now();
        //----------------------------------------------
        while (i < numberArray.length) {
            var firstSum = 0;        //storage sum up to first negative number
            //Pass all started negative number
            while (numberArray[i] < 0) {
                i++;
            }

            //summing up to first negative number
            while (numberArray[i] >= 0) {
                firstSum += numberArray[i];
                i++;
            }
            //numberArray[i] < 0
            //Summing all remaining symbols
            var secondSum = 0;
            var maxSecondSum = 0;
            for (j = i; j < numberArray.length; j++) {
                secondSum += numberArray[j];
                if (maxSecondSum < secondSum) {
                    maxSecondSum = secondSum;
                }
            }
            if (maxSecondSum > 0) {
                if (maxSum < firstSum + maxSecondSum) {
                    maxSum = firstSum + maxSecondSum;
                }
            }
            else if (maxSum < firstSum) {
                maxSum = firstSum;
            }
        }
        //--------------------------------------------
        var time2 = Date.now();
        alert(time2 - time1);
        //----------------------------------------------
        return maxSum;
    },

    //O(N^2) and don't using
    GetMaxSubSum2: function (stringWithNumberArray) {
        var numberArray = ArrayProcessing.ToNumberArrConverter(stringWithNumberArray);
        if (numberArray === false) {
            return 'Invalid input!'
        }

        //---------------------------------------------
        var time1 = Date.now();
        //----------------------------------------------
        var maxSum = 0;
        for (var i = 0; i < numberArray.length; i++) {
            var currentSum = numberArray[i];
            if (maxSum < currentSum) {
                maxSum = currentSum;
            }
            for (var j = i+1; j < numberArray.length; j++) {
                currentSum += numberArray[j];
                if (maxSum < currentSum) {
                    maxSum = currentSum;
                }
            }
        }
        //--------------------------------------------
        var time2 = Date.now();
        alert(time2 - time1);
        //----------------------------------------------
        return maxSum;
    },

    KadanesAlgorithm: function (stringWithNumberArray) {
        var numberArray = ArrayProcessing.ToNumberArrConverter(stringWithNumberArray);
        if (numberArray === false) {
            return 'Invalid input!'
        }
        //---------------------------------------------
        var time1 = Date.now();
        //----------------------------------------------
        var maxSum = 0;
        var currentSum = 0;
        var minSum = 0;
        for (var i = 0; i < numberArray.length; i++) {
            currentSum += numberArray[i];
            maxSum = (currentSum-minSum > maxSum) ? currentSum-minSum : maxSum;
            minSum = (currentSum < minSum) ? currentSum: minSum;
        }
        //--------------------------------------------
        var time2 = Date.now();
        alert(time2 - time1);
        //----------------------------------------------
        return maxSum;
    },

    Search: function (stringWithNumberArray) {
        var numbersArray = ArrayProcessing.ToNumberArrConverter(stringWithNumberArray);
        if (numbersArray === false) {
            return 'Invalid input!'
        }
        numbersArray.sort(function (a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            else return 0;
        });

        var median;
        if (numbersArray.length % 2 === 0) {
            var lowerMedian, upperMedian;
            lowerMedian = numbersArray[numbersArray.length / 2 - 1];
            upperMedian = numbersArray[numbersArray.length / 2];
            median = (lowerMedian + upperMedian) / 2;
        } else {
            median = numbersArray[Math.floor(numbersArray.length / 2)];
        }

        var minStr = 'min: ' + numbersArray[0];
        var maxStr = 'max: ' + numbersArray[numbersArray.length - 1];
        var medianStr = 'median ' + median;
        return [minStr, maxStr, medianStr];
    },

    GetMaxGrowingArray: function (stringWithNumberArray) {
        var numbersArray = ArrayProcessing.ToNumberArrConverter(stringWithNumberArray);
        if (numbersArray === false) {
            return 'Invalid input!'
        }
        var minIndex, maxIndex = null;
        var currentMinIndex, currentMaxIndex = null;
        var maxLength = 0;

        for (i = 1; i < numbersArray.length; i++) {
            if (numbersArray[i] > numbersArray[i-1]) {
                if (currentMinIndex == null) {
                    currentMinIndex = i-1;
                    currentMaxIndex = i;
                }
                else {currentMaxIndex = i;}
            }
            else {
                if (maxLength < currentMaxIndex - currentMinIndex + 1) {
                    maxLength = currentMaxIndex - currentMinIndex + 1;
                    minIndex = currentMinIndex;
                    maxIndex = currentMaxIndex;
                }
                currentMinIndex = null;
                currentMaxIndex = null;
            }
        }
        if (maxLength < currentMaxIndex - currentMinIndex + 1) {
            minIndex = currentMinIndex;
            maxIndex = currentMaxIndex;
        }
        return numbersArray.slice(minIndex, maxIndex+1);
    },

    ToNumberArrConverter: function (stringWithNumberArray) {
        var array = stringWithNumberArray.split(',');       //get symbols array
        var arrayWihtNumbers = [];
        for (i = 0; i < array.length; i++) {
            if (!isNaN(parseFloat(array[i])) && isFinite(array[i])) {
                arrayWihtNumbers[i] = +array[i];            //if is number
            }
        else { return false; }
        }
        return arrayWihtNumbers;
    }
};