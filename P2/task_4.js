// JavaScript source code
var tObj = {
    Calc: function Calculate(inputExpression) {
        inputExpression = inputExpression.replace(/\s+/g, "");
        var re = /[^0-9+-/*\s]/;
        if (re.test(inputExpression)) {
            return "Invalid input";
        };

    }
}