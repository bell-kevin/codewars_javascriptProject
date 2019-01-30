/*
https://www.codewars.com/kata/sort-and-star/

You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/
function twoSort(s) {
  var t=s[0];
  for(var i=1;i<s.length;i++)
    {
      if (s[i]<t)
        t=s[i];
    }
  return t.split('').join('***');
}
