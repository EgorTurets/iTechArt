// JavaScript source code


function Calculate(inputExpression) {
    var invInp = "Invalid input";
    inputExpression = inputExpression.replace(/\s+/g, "");
    if (/[^0-9+-/*().]|[-+/*][-+/*]|\([\D]*\)|[\d\)]\(|\)[\d\(]|\([/*+]\d|\d[/*+-]\)|^[+/*]|[-+/*]$/.test(inputExpression)) {
        return invInp;
    }
    if (/^\.|\D\.|\.\D|\.\d+\.|\.$/.test(inputExpression)) {
        return invInp;
    }
    var openBrackets = [], closeBrackets = [];
    openBrackets = inputExpression.match(/\(/g);
    closeBrackets = inputExpression.match(/\)/g);
    if ((openBrackets === null || closeBrackets === null) && (openBrackets !== closeBrackets)) {
        return invInp;
    }
    else if (!(openBrackets === null && closeBrackets === null)) {
        if (openBrackets.length != closeBrackets.length) {
            return invInp;
        }
    }

    var RPN = new Object()
    RPN.storage = [];
    RPN.index = 0;
    var tempSymbols = new Object();
    tempSymbols.symbolsArray = [null];
    tempSymbols.lastIndex = 0;
    var response = 0;
    if (inputExpression[0] === "-") {
        RPN.storage[RPN.index] = 0;
        RPN.index++;
    }

    //create Reverse Polish notation
    for (i = 0; i<inputExpression.length; i++) {
        if (/[0-9]/.test(inputExpression[i])) {
            var regExp = /[+\-/*()]/g;
            regExp.lastIndex = i;
            var endNumber = regExp.exec(inputExpression);
            if (!endNumber) {
                RPN.storage[RPN.index] = +inputExpression.substring(i);
                RPN.index++;
                i = inputExpression.length;
            }
            else {
                RPN.storage[RPN.index] = +inputExpression.substring(i, endNumber.index);
                RPN.index++;
                i = endNumber.index-1;
            }
        }
        else { tempSymbols.symbolsArray = OperatorComparison (inputExpression[i], tempSymbols, RPN)
        }
        if (RPN.isBad)
            return "Something is bad";
    }
    while (tempSymbols.symbolsArray[tempSymbols.lastIndex] !== null) {
        RPN.storage[RPN.index] = tempSymbols.symbolsArray[tempSymbols.lastIndex];
        RPN.index++;
        tempSymbols.lastIndex--;
    }

    //read Reverse Polish notation
    for (i = 0; i < RPN.storage.length; i++) {
        var t = RPN.storage[i];
        while (!isNaN(RPN.storage[i])) { i++; }
        switch (RPN.storage[i]) {
            case "+":
                RPN.storage[i-2] = RPN.storage[i-2] + RPN.storage[i-1];
                break;
            case "-":
                RPN.storage[i-2] = RPN.storage[i-2] - RPN.storage[i-1];
                break;
            case "*":
                RPN.storage[i-2] = RPN.storage[i-2] * RPN.storage[i-1];
                break;
            case "/":
                RPN.storage[i-2] = RPN.storage[i-2] / RPN.storage[i-1];
                break;
        }
        RPN.storage.splice(i-1, 2);
        i = i-2;
    }

    return response = RPN.storage;
}

function OperatorComparison(currentOperator, symbStor, RPN) {
    switch (currentOperator) {
        case "+":
        case "-":
            switch (symbStor.symbolsArray[symbStor.lastIndex]) {
                case "+":
                case "-":
                case "*":
                case "/":
                    RPN.storage[RPN.index] = symbStor.symbolsArray[symbStor.lastIndex];
                    symbStor.lastIndex--;
                    RPN.index++;
                    OperatorComparison (currentOperator, symbStor, RPN);
                    break;
                case null:
                case "(":
                    symbStor.symbolsArray[symbStor.lastIndex+1] = currentOperator;
                    symbStor.lastIndex++;
                    break;
                default: RPN.isBad = true;
            }
            break;
        case "/":
        case "*": {
            switch (symbStor.symbolsArray[symbStor.lastIndex]) {
                case "+":
                case "-":
                case null:
                case "(":
                    symbStor.symbolsArray[symbStor.lastIndex+1] = currentOperator;
                    symbStor.lastIndex++;
                    break;
                case "*":
                case "/":
                    RPN.storage[RPN.index] = symbStor.symbolsArray[symbStor.lastIndex];
                    symbStor.lastIndex--;
                    RPN.index++;
                    OperatorComparison (currentOperator, symbStor, RPN);
                    break;
                default: RPN.isBad = true;
            }
        } break;
        case "(":
            symbStor.symbolsArray[symbStor.lastIndex+1] = currentOperator;
            symbStor.lastIndex++;
            break;
        case ")":
            while (symbStor.symbolsArray[symbStor.lastIndex] !== "(") {
                RPN.storage[RPN.index] = symbStor.symbolsArray[symbStor.lastIndex];
                symbStor.lastIndex--;
                RPN.index++;
            }
            symbStor.lastIndex--;
            break;
        default: RPN.isBad = true;
    }
    return symbStor.symbolsArray;
}

