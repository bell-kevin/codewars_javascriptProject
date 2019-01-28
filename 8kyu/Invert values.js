/*
https://www.codewars.com/kata/invert-values/

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers.
*/
function invert(array) {
  for(var i=0;i<array.length;i++)
    {
      if (array[i]==0)
      array[i] = 0;
      else
      array[i] *= -1;
    }
    return array;
}
