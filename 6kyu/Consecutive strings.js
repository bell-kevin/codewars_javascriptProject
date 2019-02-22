/*
https://www.codewars.com/kata/consecutive-strings/

You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption
*/
function longestConsec(arr, k) {
  var n = arr.length,
      res = '',
      temp
  if (n == 0 || k > n || k <= 0) return ''
  for (var i = 0; i <= n - k; i++) {
    temp = ''
    for (var j = 0; j < k; j++)
      temp += arr[i + j]
    if (res.length < temp.length)
      res = temp
  }
  return res
}
