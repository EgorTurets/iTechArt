/**
 * Created by yahor.turets on 20.07.2017.
 */
function Calculate(inputNumber, convertType) {
    var response;
    if (convertType === "BinDec") response = BinDecConverter(inputNumber);
    if (convertType === "DecBin") response = DecBinConverter(inputNumber);

    return response;
}

function BinDecConverter (inputNumber) {
    var response = 0;
    var regExp = /[^01]/g;
    if (regExp.test(inputNumber)) return 'Invalid input!';
    inputNumber = inputNumber.split("");
    inputNumber.reverse();
    for (i = 0; i < inputNumber.length; i++) {
        response += +inputNumber[i] * Math.pow(2, i);
    }
    return response;
}

function DecBinConverter (inputNumber) {
    var response = [];
    var regExp = /[^0-9]/g;
    if (regExp.test(inputNumber)) return 'Invalid input!';
    var i = 0;
    while (inputNumber > 0) {
        response[i] = inputNumber % 2;
        inputNumber = Math.floor(inputNumber / 2);
        i++;
    }
    response.reverse();
    return response.join("");
}