/*
https://www.codewars.com/kata/duplicate-encoder/The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("
*/
function duplicateEncode(word){
  var reg,res=''
  for(var i=0;i<word.length;i++)
    {
      reg = new RegExp('['+word[i]+']','gi')
      if ((word.match(reg)||[]).length>1)
        res+=')'
      else
        res+='('
    }
  return res
}
