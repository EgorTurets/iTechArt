// JavaScript source code

function Wrap(text, formatType, lineLength) {    
    if (/[^0-9]/.test(lineLength) || lineLength.length == 0) {
        alert("Length is not numeric");
        return text;
    }    
    else lineLength = +lineLength;
    switch (formatType) {
        case "NoWrap": text = NoWrap(text);
		    break;
        case "SymbolWrap": text = SymbolWrap(text, lineLength);
		    break;
        case "WordWrap": text = WordWrap(text, lineLength);
			break;
        case "ClauseWrap": text = ClauseWrap(text, lineLength);
            break;
        default: alert("Something is bad");
    }
    return text;
}

function NoWrap (text){
    var regExp = /\n/g;
    text = text.replace(regExp, "");
    return text;
}
	
function SymbolWrap(text, lineLength) {
    text = NoWrap(text);
    var regExp = new RegExp(".{" + lineLength + "}", "g");
    text = text.replace(regExp, "$&\n");
    return text;
}

function WordWrap(text, lineLength) {
    text = NoWrap(text);
    var regExp = new RegExp(".{0," + lineLength + "}\\b", "g");
    text = text.replace(regExp, "$&\n");
    return text;
}

function ClauseWrap(text, lineLength) {
    text = NoWrap(text);
    var regExp = new RegExp(".{0," + lineLength + "}[.!?]", "g");
    text = text.replace(regExp, "$&\n");
    return text;
}