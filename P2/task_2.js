/**
 * Created by yahor.turets on 17.07.2017.
 */
var DateDisplayFormatter;
DateDisplayFormatter = {
    // basicReg: /^(\d\d)(\d\d)(\d\d\d\d)/,     //DDMMYYYY
    basicReg: /^(0[1-9]|[1-2][0-9]|[3][01])(0[1-9]|1[0-2])(\d\d\d\d)$/,  //DDMMYYYY
    //для парсинга входных и выходных регулярок
    // //^(d{1,2}|m{1,2}|y{1,4})([^0-9a-z])?(d{1,2}|m{1,2}|y{1,4})([^0-9a-z])?(d{1,2}|m{1,2}|y{1,4})/i
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

        if (inputFormat === undefined) {
            outputDate = DateDisplayFormatter.BasicReplacer(inputDate);
        }
        else if (outputFormat === undefined) {
            inputFormat = DateDisplayFormatter.GetRegExpByUserFormat(inputFormat);
        }


        if(outputDate === undefined) {
            return 'Invalid input';
        }
        return outputDate;
    },

    //DDMMYYYY -> DD-MM-YYYY
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

    ReplaceWithInputFormat: function (inputDate, inputFormat) {
    },

    ParseUsersExpression: function () {

    },

    GetRegExpByUserFormat: function (userRegExp) {
        var regExpResult;
        userRegExp.replace(DateDisplayFormatter.parserUsersRegExp, function (str, p1, p2, p3, p4, p5, offset, s) {
            //проверка, если в шаблоне неправильно указаны дни месяцы или года, кинуть ошибку
            if ((/d/i.test(p1)&&/d/i.test(p3))||(/d/i.test(p1)&&/d/i.test(p5))||(/d/i.test(p3)&&/d/i.test(p5)) ||
                (/m/i.test(p1)&&/m/i.test(p3))||(/m/i.test(p1)&&/m/i.test(p5))||(/m/i.test(p3)&&/m/i.test(p5)) ||
                (/y/i.test(p1)&&/y/i.test(p3))||(/y/i.test(p1)&&/y/i.test(p5))||(/y/i.test(p3)&&/y/i.test(p5))) {

                return undefined;
            }

            regExpResult = str.replace(/dd?/i, "(0[1-9]|[1-2][0-9]|[3][01])").replace(
                /mm?/i, "(0[1-9]|1[0-2])").replace(/y+/i, "(\\d\\d\\d\\d)");
        });
        return regExpResult;
    }
};