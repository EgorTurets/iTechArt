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
    var openBrackets = inputExpression.match(/\(/g);
    var closeBrackets = inputExpression.match(/\)/g);
    if (openBrackets.length !== closeBrackets.length) {
        return invInp;
    }

    var smthBad = "Something is bad";
    var RPN = [];
    var tempStorage = [null];
    var RPNi = 0, tStorLastIndex = 0;
    var response = 0;
    if (inputExpression[0] === "-") {
        RPN[RPNi] = 0;
        RPNi++;
    }
    for (i = 0; i<inputExpression.length; i++) {
        if (/[0-9.]/.test(inputExpression[i])) {
            RPN[RPNi] = inputExpression[i];
            RPNi++;
        }
        else {
            switch (inputExpression[i]) {
                case "+":
                case "-":
                    switch (tempStorage[tStorLastIndex]) {
                        case "+":
                        case "-":
                        case "*":
                        case "/":
                            RPN[RPNi] = tempStorage[tStorLastIndex];
                            tStorLastIndex--;
                            RPNi++;
                            break;
                        case null:
                        case "(":
                            tempStorage[tStorLastIndex+1] = inputExpression[i];
                            tStorLastIndex++;
                            break;
                        default: return smthBad;
                    }
                    break;
                case "/":
                case "*": {
                    switch (tempStorage[tStorLastIndex]) {
                        case "+":
                        case "-":
                        case null:
                        case "(":
                            tempStorage[tStorLastIndex+1] = inputExpression[i];
                            tStorLastIndex++;
                            break;
                        case "*":
                        case "/":
                            RPN[RPNi] = tempStorage[tStorLastIndex];
                            tStorLastIndex--;
                            RPNi++;
                            break;
                        default: return smthBad;
                    }
                } break;
                case "(":
                    tempStorage[tStorLastIndex+1] = inputExpression[i];
                    tStorLastIndex++;
                    break;
                case ")":
                    while (tempStorage[tStorLastIndex] !== "(") {
                        RPN[RPNi] = tempStorage[tStorLastIndex];
                        tStorLastIndex--;
                        RPNi++;
                    }
                    tStorLastIndex--;
                    break;
                default: return smthBad;
            }
        }
    }
    while (tempStorage[tStorLastIndex] !== null) {
        RPN[RPNi] = tempStorage[tStorLastIndex];
        RPNi++;
        tStorLastIndex--;
    }


    return response = RPN;
}

