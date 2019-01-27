/*
https://www.codewars.com/kata/calculate-average/

Write function avg which calculates average of numbers in given list.
*/
function find_average(array) {
  var avg;
  var sum = 0;
    for (var i = 0; i < array.length; i++)
    {
      sum += array[i];
    }
    avg = (sum / array.length);
    return avg;
}
