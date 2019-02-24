/*
https://www.codewars.com/kata/maximum-subarray-sum/

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/
maxSequence = arr => {
  if (arr.length == 0) return 0
  var sum, s_arr = []
  for (var i = 0; i < arr.length; i++) {
    sum = 0
    for (var j = i; j < arr.length; j++) {
      sum += arr[j]
      s_arr.push(sum)
    }
  }
  return Math.max.apply(null, s_arr) >= 0 ? Math.max.apply(null, s_arr) : 0
}
