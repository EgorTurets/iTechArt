/**
 * Created by yahor.turets on 17.07.2017.
 */
var DateDisplayFormatter;
DateDisplayFormatter = {
    basicReg: /^(0[1-9]|[1-2][0-9]|[3][01])(0[1-9]|1[0-2])(\d{4})$/,  //DDMMYYYY
    //for parsing users regular expression
    parserUsersRegExp: /^(d{1,2}|m{1,2}|y{1,4})([_\W])?(d{1,2}|m{1,2}|y{1,4})([_\W])?(d{1,2}|m{1,2}|y{1,4})\s*$/i,

    ParseUsersString: function (usersString) {
        var inputDate, inputFormat, outputFormat, outputDate;

        //parsing the input string
        var subStrings = usersString.split(/,\s+/);
        inputDate = subStrings[0];
        inputFormat = subStrings[1];
        outputFormat = subStrings[2];
        var datePartsPosition = [];         //storage for day, month and year position

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
            inputFormat = DateDisplayFormatter.GetRegExpByUserFormat(inputFormat, datePartsPosition);
            if (DateDisplayFormatter.IsValidOutputFormat(outputFormat)) {
                outputDate = DateDisplayFormatter.ReplaceWithInOutFormat(inputDate, inputFormat, datePartsPosition, outputFormat);

            }
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

    // ??? -> ???
    ReplaceWithInOutFormat: function (inputDate, inputFormat, partsPosition, outputFormat) {
        var outStr = undefined;

        inputDate.replace(inputFormat, function (str, p1, p2, p3, offset, s) {
            switch(partsPosition[0]) {
                case 0: outputFormat = outputFormat.replace(/D+/i, p1);
                    break;
                case 1: outputFormat = outputFormat.replace(/D+/i, p2);
                    break;
                case 2: outputFormat = outputFormat.replace(/D+/i, p3);
                    break;
            }
            switch(partsPosition[1]) {
                case 0: outputFormat = outputFormat.replace(/M+/i, p1);
                    break;
                case 1: outputFormat = outputFormat.replace(/M+/i, p2);
                    break;
                case 2: outputFormat = outputFormat.replace(/M+/i, p3);
                    break;
            }
            switch(partsPosition[2]) {
                case 0: outputFormat = outputFormat.replace(/Y+/i, p1);
                    break;
                case 1: outputFormat = outputFormat.replace(/Y+/i, p2);
                    break;
                case 2: outputFormat = outputFormat.replace(/Y+/i, p3);
                    break;
            }
            outStr = outputFormat;
        });
        return outStr;
    },
    
    GetRegExpByUserFormat: function (userRegExp, partsPosition) {
        var regExpResult;
        var dateParts = [/D/i, /M/i, /Y/i];

        userRegExp.replace(DateDisplayFormatter.parserUsersRegExp, function (str, p1, p2, p3, p4, p5, offset, s) {
            //Check for duplicate symbols
            if ((/d/i.test(p1)&&/d/i.test(p3))||(/d/i.test(p1)&&/d/i.test(p5))||(/d/i.test(p3)&&/d/i.test(p5)) ||
                (/m/i.test(p1)&&/m/i.test(p3))||(/m/i.test(p1)&&/m/i.test(p5))||(/m/i.test(p3)&&/m/i.test(p5)) ||
                (/y/i.test(p1)&&/y/i.test(p3))||(/y/i.test(p1)&&/y/i.test(p5))||(/y/i.test(p3)&&/y/i.test(p5))) {
                return undefined;
            }
            for (i = 0; i < 3; i++) {
                if(dateParts[i].test(p1)) {partsPosition[i] = 0}
                if(dateParts[i].test(p3)) {partsPosition[i] = 1}
                if(dateParts[i].test(p5)) {partsPosition[i] = 2}
            }

            regExpResult = str.replace(/dd/i, "(0[1-9]|[1-2][0-9]|[3][01])").replace(
                /mm/i, "(0[1-9]|1[0-2])").replace(/[dm]/ig, "([1-9])");
            regExpResult = regExpResult.replace(/y+/i, "($&)").replace(/y/ig, "\\d");
        });
        if (regExpResult) {
            regExpResult = new RegExp("^" + regExpResult + "$", "i");
        }
        return regExpResult;
    },
    
    IsValidOutputFormat: function (outputFormat) {
        //Check for duplicate and not valid symbols
        if (/DD?[^D]+D/i.test(outputFormat)) {return false; };
        if (/MM?[^M]+M/i.test(outputFormat)) {return false; };
        if (/Y{1,4}[^Y]+Y/i.test(outputFormat)) {return false; };
        if (/[^DMY_\W]/i.test(outputFormat)) {return false;} ;

        return true;
    }
};