/*
https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
function countPositivesSumNegatives(input) {
  var countOfPositives = 0;
  var sumOfNegatives = 0;
    if (input == null || input.length == 0)
      {
      return[];
      }
    else
    for (var i = 0; i <= input.length; i++)
    {
      if (input[i] > 0)
      {
      countOfPositives++;
      }
      else if (input[i] < 0){
      sumOfNegatives = sumOfNegatives + input[i];
      }
    }
    return [countOfPositives, sumOfNegatives];
}
//Alternative
function countPositivesSumNegatives(inp) {
  if (inp==null || inp.length==0)
    return []
  var p=0,n=0
  for(var i=0;i<inp.length;i++)
    inp[i]>0 ? p++ : n+=inp[i]
  return [p,n]
}
