/*
https://www.codewars.com/kata/find-the-odd-int/

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/
function findOdd(A) {
 var c,int;
  while (A.length>0)
  {
    int=A[0];
    A.splice(0,1);
    c=1;
    if (A.length==0) return int;
    for(var i=0;i<A.length;i++)
      {
        if (int==A[i])
          {
            c++;
            A.splice(i,1);
            i--;
          }
      }
    if (c%2==1)
        return int;
  }
}
