/*
https://www.codewars.com/kata/unique-in-order/

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
function uniqueInOrder(iter) {
  var x = iter
  if (typeof(x) != 'object')
    x = iter.split('')
  return x.filter((x, i, arr) => !i || x !== arr[i - 1])
}
