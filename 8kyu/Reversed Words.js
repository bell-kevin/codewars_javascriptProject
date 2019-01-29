/*
https://www.codewars.com/kata/reversed-words/

Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"
*/
function reverseWords(str){
  var arr = str.split(' '), s='';
  for(var i=arr.length-1;i>=0;i--)
    {
      i==0 ? s+=arr[i] : s+=arr[i]+' ';
    }
  return s;
}

//Alternative
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}
