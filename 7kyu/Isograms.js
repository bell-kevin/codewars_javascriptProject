/*
https://www.codewars.com/kata/isograms/

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
*/
function isIsogram(str){
  if (str=='')
    return true;
  else
  {
    var s=str.toLowerCase();
    for(var i=0;i<s.length;i++)
      {
        if (s.indexOf(s[i])==s.lastIndexOf(s[i]))
        {
          if (i==s.length-1)
            return true;
          else
            continue;
        }
        else
          return false;
      }
  }
}
