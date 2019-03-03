/*
https://www.codewars.com/kata/scramblies/

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/
function scramble(str1, str2) {
  var abc = new Array(26).fill(0)
  for (var i = 0; i < str1.length; i++)
    abc[str1.charCodeAt(i) - 97]++
  for (var i = 0; i < str2.length; i++)
    abc[str2.charCodeAt(i) - 97]--
  return abc.filter(a => a < 0).length < 1
}
