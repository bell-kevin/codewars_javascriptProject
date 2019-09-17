/*
https://www.codewars.com/kata/mumbling/

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
function accum(s) {
    var str = '';
    for (var i = 0; i < s.length; i++) {
        str += s[i].toUpperCase();
        for (var j = 0; j < i; j++) {
            str += s[i].toLowerCase();
        }
        if (i < s.length - 1)
            str += '-';
    }
    return str;
}

//Alternative
function accum(s) {
    var str = '';
    for (var i = 0; i < s.length; i++) {
        str += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + ((i < s.length - 1) ? '-' : '');
    }
    return str;
}

//Alternative
accum = s => s.split("").map((item, i) => item.toUpperCase() + item.toLowerCase().repeat(i)).join("-");