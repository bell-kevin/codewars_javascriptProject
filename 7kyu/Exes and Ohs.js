/*
https://www.codewars.com/kata/exes-and-ohs/

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
function XO(str) {
  var arr = str.split(''), xc=0, oc=0;
  for(var i=0;i<arr.length;i++)
    {
      if (arr[i]=='x' || arr[i]=='X')
        xc++;
      if (arr[i]=='o' || arr[i]=='O')
        oc++;
    }
    return (oc==xc);
}
