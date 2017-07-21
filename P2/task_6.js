/**
 * Created by yahor.turets on 20.07.2017.
 */
function Convert(inputNumber, convertFromType, convertToType) {
    var response;
    var smthBad = "Something is bad";
    switch (convertFromType) {
        case "Bin": {
            switch (convertToType) {
                case "Bin": response = inputNumber; break;
                case "Dec": response = BinDecConverter(inputNumber); break;
                case "Hex": response = BinHexConverter(inputNumber); break;
                default: response = smthBad;
            }
            break;
        }
        case "Dec": {
            switch (convertToType) {
                case "Bin": response = DecBinConverter(inputNumber); break;
                case "Dec": response = inputNumber; break;
                case "Hex": response = BinHexConverter(DecBinConverter(inputNumber)); break;
                default: response = smthBad;
            }
            break;
        }
        case "Hex": {
            switch (convertToType) {
                case "Bin": response = HexBinConverter(inputNumber); break;
                case "Dec": response = BinDecConverter(HexBinConverter(inputNumber)); break;
                case "Hex": response = inputNumber; break;
                default: response = smthBad;
            }
            break;
        }
        default: response = smthBad;
    }

    return response;
}

function BinDecConverter (inputNumber) {
    var response = 0;
    inputNumber = inputNumber.replace(/\s/g, "");
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

function HexBinConverter (inputNumber) {
    var response = [];
    inputNumber = inputNumber.toUpperCase();
    var regExp = /[^0-9A-F]/ig;
    if (regExp.test(inputNumber)) return 'Invalid input!';
    for (var i = 0; i < inputNumber.length; i++) {
        switch (inputNumber[i]) {
            case "0": response.push("0000"); break;
            case "1": response.push("0001"); break;
            case "2": response.push("0010"); break;
            case "3": response.push("0011"); break;
            case "4": response.push("0100"); break;
            case "5": response.push("0101"); break;
            case "6": response.push("0110"); break;
            case "7": response.push("0111"); break;
            case "8": response.push("1000"); break;
            case "9": response.push("1001"); break;
            case "A": response.push("1010"); break;
            case "B": response.push("1011"); break;
            case "C": response.push("1100"); break;
            case "D": response.push("1101"); break;
            case "E": response.push("1110"); break;
            case "F": response.push("1111"); break;
        }
    }
    return response.join("");
}

function BinHexConverter(inputNumber) {
    var response = [];
    var regExp = /[^01]/g;
    if (regExp.test(inputNumber)) return 'Invalid input!';
    inputNumber = inputNumber.split("");
    inputNumber = inputNumber.reverse();
    var bytes = [];
    for (i=0; i<inputNumber.length; i = i+4) {
        bytes.push(inputNumber.slice(i, i+4));
        while (bytes[bytes.length-1].length < 4)
            bytes[bytes.length-1].push("0");
        bytes[bytes.length-1] = bytes[bytes.length-1].join("");
    }

    for (var i = 0; i < bytes.length; i++) {
        switch (bytes[i]) {
            case "0000": response.push("0"); break;
            case "1000": response.push("1"); break;
            case "0100": response.push("2"); break;
            case "1100": response.push("3"); break;
            case "0010": response.push("4"); break;
            case "1010": response.push("5"); break;
            case "0110": response.push("6"); break;
            case "1110": response.push("7"); break;
            case "0001": response.push("8"); break;
            case "1001": response.push("9"); break;
            case "0101": response.push("A"); break;
            case "1101": response.push("B"); break;
            case "0011": response.push("C"); break;
            case "1011": response.push("D"); break;
            case "0111": response.push("E"); break;
            case "1111": response.push("F"); break;
            default: return "Something is bad";
        }
    }
    return response.reverse().join("");
}