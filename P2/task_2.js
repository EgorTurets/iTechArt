/**
 * Created by yahor.turets on 17.07.2017.
 */
var DateDisplayFormatter;
DateDisplayFormatter = {
    ParseUsersString: function (usersString) {
        var basicReg = /^(0[1-9]|[1-2][0-9]|[3][01])(0[1-9]|1[0-2])(\d{4})$/;  //DDMMYYYY
            //for parsing users regular expression
        var parserUsersRegExp = /^(d{1,2}|m{1,2}|y{1,4})([_\W])?(d{1,2}|m{1,2}|y{1,4})([_\W])?(d{1,2}|m{1,2}|y{1,4})\s*$/i;
        var ticksParser = /^\(?\d+, ms/i;
        var fromNowParser = /^\((.+)\)\.fromNow\(\)$/i;
        var inputDateStr, inputFormatStr, outputFormatStr, outputDate;

        //DDMMYYY -> DD-MM-YYYY
        function BasicReplacer(dateStr) {
            var replacedString;
            dateStr.replace(basicReg, function (str, p1, p2, p3, offset, s) {
                if (p1 === undefined || p2 === undefined || p3 === undefined) {
                    replacedString = false;
                }
                replacedString = p1 + '-' + p2 + '-' + p3;
            });
            if(!replacedString) { return undefined; }
            else { return replacedString; }
        };

        // ??? -> DD-MM-YYYY
        function ReplaceWithInputFormat(partsPosition) {
            var outStrFormat = "D-M-Y";
            var outStr = undefined;
            inputDateStr.replace(inputFormatStr, function (str, p1, p2, p3, offset, s) {
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
        };

        // ??? -> ???
        function ReplaceWithInOutFormat(partsPosition) {
            var outStr = undefined;

            inputDateStr.replace(inputFormatStr, function (str, p1, p2, p3, offset, s) {
                switch(partsPosition[0]) {
                    case 0: outputFormatStr = outputFormatStr.replace(/D+/i, p1);
                        break;
                    case 1: outputFormatStr = outputFormatStr.replace(/D+/i, p2);
                        break;
                    case 2: outputFormatStr = outputFormatStr.replace(/D+/i, p3);
                        break;
                }
                switch(partsPosition[1]) {
                    case 0: outputFormatStr = outputFormatStr.replace(/M+/i, p1);
                        break;
                    case 1: outputFormatStr = outputFormatStr.replace(/M+/i, p2);
                        break;
                    case 2: outputFormatStr = outputFormatStr.replace(/M+/i, p3);
                        break;
                }
                switch(partsPosition[2]) {
                    case 0: outputFormatStr = outputFormatStr.replace(/Y+/i, p1);
                        break;
                    case 1: outputFormatStr = outputFormatStr.replace(/Y+/i, p2);
                        break;
                    case 2: outputFormatStr = outputFormatStr.replace(/Y+/i, p3);
                        break;
                }
                outStr = outputFormatStr;
            });
            return outStr;
        };

        function GetRegExpByUserFormat(partsPosition) {
            var regExpResult;
            var dateParts = [/D/i, /M/i, /Y/i];

            inputFormatStr.replace(parserUsersRegExp, function (str, p1, p2, p3, p4, p5, offset, s) {
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
        };

        function IsValidOutputFormat() {
            //Check for duplicate and not valid symbols
            if (/DD?[^D]+D/i.test(outputFormatStr)) {return false; };
            if (/MM?[^M]+M/i.test(outputFormatStr)) {return false; };
            if (/Y{1,4}[^Y]+Y/i.test(outputFormatStr)) {return false; };
            if (/[^DMY_\W]/i.test(outputFormatStr)) {return false;} ;

            return true;
        }

        function DateStrToDate(partsPosition) {
            var date;
            inputDateStr.replace(inputFormatStr, function (str, p1, p2, p3, offset, s) {

                var day, mounth, year;
                switch(partsPosition[0]) {
                    case 0: day = +p1;
                        break;
                    case 1: day = +p2;
                        break;
                    case 2: day = +p3;
                        break;
                    default: outStrFormat = undefined;
                }
                switch(partsPosition[1]) {
                    case 0: mounth = +p1;
                        break;
                    case 1: mounth = +p2;
                        break;
                    case 2: mounth = +p3;
                        break;
                    default: outStrFormat = undefined;
                }
                switch(partsPosition[2]) {
                    case 0: year = +p1;
                        break;
                    case 1: year = +p2;
                        break;
                    case 2: year = +p3;
                        break;
                    default: outStrFormat = undefined;
                }
                date = new Date(year, mounth-1, day);
            });
            return date;
        }

//=========================================================================================
// public method

        function Format() {
            var datePartsPosition = [];         //storage for day, month and year position

            //if ????.fromNow()
            if (fromNowParser.test(usersString)) {
                usersString.replace(fromNowParser, function (str, p1, offset, s) {
                    var subStrings = p1.split(/,\s+/);
                    if (subStrings.length > 2) return 'Invalid input';
                    inputDateStr = subStrings[0];
                    inputFormatStr = subStrings[1];
                });
                if (ticksParser.test(usersString)) {
                    if (/\D/.test(inputDateStr)) {
                        return 'Invalid input';
                    }
                    var date = new Date(+inputDateStr);

                    var difference = new Date(Date.now() - date);

                    return difference.getYear()-70 + " years ago"
                }

                if(inputFormatStr === undefined) inputFormatStr = "DDMMYYYY";
                inputFormatStr = GetRegExpByUserFormat(datePartsPosition);
                var userDate = DateStrToDate(datePartsPosition);
                var difference = new Date(Date.now() - userDate);

                return difference.getYear()-70 + " years ago"
            }

            //parsing the input string
            var subStrings = usersString.split(/,\s+/);
            inputDateStr = subStrings[0];
            inputFormatStr = subStrings[1];
            outputFormatStr = subStrings[2];

            //if #####, ms
            if (ticksParser.test(usersString)) {
                if (/\D/.test(inputDateStr)) {
                    return 'Invalid input';
                }
                var date = new Date(+inputDateStr);
                if (outputFormatStr === undefined) {
                    return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
                }
                if (IsValidOutputFormat()) {
                    outputFormatStr = outputFormatStr.replace(/D+/i, date.getDate());
                    outputFormatStr = outputFormatStr.replace(/M+/i, date.getMonth()+1);
                    outputFormatStr = outputFormatStr.replace(/Y+/i, date.getFullYear());
                    return outputFormatStr;
                }
                return 'Invalid input';
            }

            //DDMMYYYY -> DD-MM-YYYY
            if (inputFormatStr === undefined) {
                outputDate = BasicReplacer(inputDateStr);
            }
            //??? -> DD-MM-YYYY
            else if (outputFormatStr === undefined) {
                inputFormatStr = GetRegExpByUserFormat(datePartsPosition);
                outputDate = ReplaceWithInputFormat(datePartsPosition);
            }
            // ??? -> ???
            else {
                inputFormatStr = GetRegExpByUserFormat(datePartsPosition);
                if (IsValidOutputFormat()) {
                    outputDate = ReplaceWithInOutFormat(datePartsPosition);

                }
            }

            if(outputDate === undefined) {
                return 'Invalid input';
            }
            return outputDate;
        }

        return Format();
    }
};