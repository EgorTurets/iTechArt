/**
 * Created by yahor.turets on 17.07.2017.
 */
var DateDisplayFormatter;
DateDisplayFormatter = {
    basicReg: /^(0[1-9]|[1-2][0-9]|[3][01])(0[1-9]|1[0-2])(\d{4})$/,  //DDMMYYYY
    //для парсинга входных и выходных регулярок
    parserUsersRegExp: /^(d{1,2}|m{1,2}|y{1,4})([_\W])?(d{1,2}|m{1,2}|y{1,4})([_\W])?(d{1,2}|m{1,2}|y{1,4})\s*$/i,
    //для парсинга всей строки на части
    //fullStringParser: /^([^a-z]{1,10}),\s?([^0-9_]{1,10}),\s?([^0-9_]{1,10})/i,

    ParseUsersString: function (usersString) {
        var inputDate, inputFormat, outputFormat, outputDate;

        //разбивка входной строки на части
        var subStrings = usersString.split(/,\s+/);
        inputDate = subStrings[0];
        inputFormat = subStrings[1];
        outputFormat = subStrings[2];
        var datePartsPosition = [];         //хранит позиции дня месяца и года

        //DDMMYYYY -> DD-MM-YYYY
        if (inputFormat === undefined) {
            outputDate = DateDisplayFormatter.BasicReplacer(inputDate);
        }
        //??? -> DD-MM-YYYY
        else if (outputFormat === undefined) {
            inputFormat = DateDisplayFormatter.GetRegExpByUserFormat(inputFormat, datePartsPosition);
            outputDate = DateDisplayFormatter.ReplaceWithInputFormat(inputDate, inputFormat, datePartsPosition);
        }
        // ??? -> ???
        else {
            inputFormat = DateDisplayFormatter.GetRegExpByUserFormat(inputFormat);
            outputFormat = DateDisplayFormatter.GetRegExpByUserFormat(outputFormat);
            //outputDate = DateDisplayFormatter.GetBasicDate(inputDate, inputFormat);
        }


        if(outputDate === undefined) {
            return 'Invalid input';
        }
        return outputDate;
    },

    //DDMMYYY -> DD-MM-YYYY
    BasicReplacer: function (dateStr) {
        var replacedString;
        dateStr.replace(DateDisplayFormatter.basicReg, function (str, p1, p2, p3, offset, s) {
            if (p1 === undefined || p2 === undefined || p3 === undefined) {
                replacedString = false;
            }
            replacedString = p1 + '-' + p2 + '-' + p3;
        });
        if(!replacedString) { return undefined; }
        else { return replacedString; }
    },

    // ??? -> DD-MM-YYYY
    ReplaceWithInputFormat: function (inputDate, inputFormat, partsPosition) {
        var outStrFormat = "D-M-Y";
        var outStr = undefined;
        inputDate.replace(inputFormat, function (str, p1, p2, p3, offset, s) {
            switch(partsPosition[0]) {
                case 0: outStrFormat = outStrFormat.replace(/D/, p1);
                    break;
                case 1: outStrFormat = outStrFormat.replace(/D/, p2);
                    break;
                case 2: outStrFormat = outStrFormat.replace(/D/, p3);
                    break;
                default: outStrFormat = undefined;
            }
            switch(partsPosition[1]) {
                case 0: outStrFormat = outStrFormat.replace(/M/, p1);
                    break;
                case 1: outStrFormat = outStrFormat.replace(/M/, p2);
                    break;
                case 2: outStrFormat = outStrFormat.replace(/M/, p3);
                    break;
                default: outStrFormat = undefined;
            }
            switch(partsPosition[2]) {
                case 0: outStrFormat = outStrFormat.replace(/Y/, p1);
                    break;
                case 1: outStrFormat = outStrFormat.replace(/Y/, p2);
                    break;
                case 2: outStrFormat = outStrFormat.replace(/Y/, p3);
                    break;
                default: outStrFormat = undefined;
            }
            outStr = outStrFormat;
        });
        return outStr;
    },


    GetRegExpByUserFormat: function (userRegExp, partsPosition) {
        var regExpResult;
        var dateParts = [/D/i, /M/i, /Y/i];

        userRegExp.replace(DateDisplayFormatter.parserUsersRegExp, function (str, p1, p2, p3, p4, p5, offset, s) {
            //проверка, если в шаблоне неправильно указаны дни месяцы или года, кинуть ошибку
            if ((/d/i.test(p1)&&/d/i.test(p3))||(/d/i.test(p1)&&/d/i.test(p5))||(/d/i.test(p3)&&/d/i.test(p5)) ||
                (/m/i.test(p1)&&/m/i.test(p3))||(/m/i.test(p1)&&/m/i.test(p5))||(/m/i.test(p3)&&/m/i.test(p5)) ||
                (/y/i.test(p1)&&/y/i.test(p3))||(/y/i.test(p1)&&/y/i.test(p5))||(/y/i.test(p3)&&/y/i.test(p5))) {
                return undefined;
            }
            for (i = 0; i < 3; i++) {
                if(dateParts[i].test(p1)) {partsPosition[i] = 0}
                if(dateParts[i].test(p3)) {partsPosition[i] = 1}
                if(dateParts[i].test(p5)) {partsPosition[i] = 2}

                // if (~p1.indexOf(partsPosition[i])) {partsPosition[i] = 0}
                // if (~p3.indexOf(partsPosition[i])) {partsPosition[i] = 1}
                // if (~p5.indexOf(partsPosition[i])) {partsPosition[i] = 2}
            }

            regExpResult = str.replace(/dd/i, "(0[1-9]|[1-2][0-9]|[3][01])").replace(
                /mm/i, "(0[1-9]|1[0-2])").replace(/[dm]/ig, "([1-9])");
            regExpResult = regExpResult.replace(/y+/i, "($&)").replace(/y/ig, "\\d");
        });
        if (regExpResult) {
            regExpResult = new RegExp("^" + regExpResult + "$", "i");
        }
        return regExpResult;
    }
};