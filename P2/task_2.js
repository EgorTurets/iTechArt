/**
 * Created by yahor.turets on 17.07.2017.
 */
var DateDisplayFormatter;
DateDisplayFormatter = {
    // basicReg: /^(\d\d)(\d\d)(\d\d\d\d)/,     //DDMMYYYY
    basicReg: /^(0[1-9]|[1-2][0-9]|[3][01])(0[1-9]|1[0-2])(\d\d\d\d)/,  //DDMMYYYY
    
    BasicReplacer: function (str) {
        var tt = str.match(DateDisplayFormatter.basicReg);
        return str.replace(DateDisplayFormatter.basicReg, '$1-$2-$3')   //DD-MM-YYYY
    }
};