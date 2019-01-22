/*
https://www.codewars.com/kata/string-repeat

Write a function called repeatStr which repeats the given string string exactly n times.
*/
function repeatStr (n, s) {
var i;
var text = '';
  for (i = 1; i <= n; ++i)
  {
  text = (text + s);
  }
  return text;
}