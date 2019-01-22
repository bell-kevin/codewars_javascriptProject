/*
https://www.codewars.com/kata/find-maximum-and-minimum-values-of-a-list/

Your task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

#Examples

max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0
#Notes

You may consider that there will not be any empty arrays/vectors.
*/
var min = function(list){
var minimum = list[0];
    for (var i = 1; i <= list.length; i++)
    {
      if (list[i] < minimum)
      {
      minimum = list[i];
      }
    }
    return minimum;
}

var max = function(list){
var maximum = list[0];
    for (var i = 1; i <= list.length; i++)
    {
      if (list[i] > maximum)
      {
      maximum = list[i];
      }
    }
    return maximum;
}
