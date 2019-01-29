/*
https://www.codewars.com/kata/double-char/

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
Good Luck!
*/
function doubleChar(str) {
  var arr=str.split(''), out='';
  for(var i=0;i<arr.length;i++)
  {
    out+=(arr[i]+arr[i]);
  }
  return out;
}
