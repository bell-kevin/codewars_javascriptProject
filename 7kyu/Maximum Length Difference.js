/*
https://www.codewars.com/kata/maximum-length-difference/

You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

#Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string

*takes in two arrays of strings
*find the largest gap between array ones largest string and array twos smallest string.
*find the largest gap between array twos largest string and array ones smallest string.
*return the length of which ever of those two is bigger.
*/
function mxdiflg(a1, a2) {
if (a1.length!=0 && a2.length!=0)
  {
    var min1=a1[0].length,max1=a1[0].length;
    var min2=a2[0].length,max2=a2[0].length;
      for(var i=1;i<a1.length;i++)
        {
          if (a1[i].length<min1)
            min1=a1[i].length;
          if (a1[i].length>max1)
            max1=a1[i].length;
        } 
      for(j=1;j<a2.length;j++)
        {
          if (a2[j].length<min2)
            min2=a2[j].length;
          if (a2[j].length>max2)
            max2=a2[j].length;
        }

        return max1-min2>max2-min1?max1-min2:max2-min1;
  }
  else return -1;
}
