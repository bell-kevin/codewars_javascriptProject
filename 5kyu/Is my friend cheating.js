/*
https://www.codewars.com/kata/is-my-friend-cheating/

A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

(See examples of returns for each language in "RUN SAMPLE TESTS")

Examples:
removNb(26) should return [(15, 21), (21, 15)]
*/
function removeNb(n) {
  var sum = 0,
      arr = [],
      a, b
  for (var i = 1; i <= n; i++)
    sum += i
  for (a = 1; a < n; a++) {
    b = (sum - a) / (a + 1)
    if (b <= n && Number.isInteger(b))
      arr.push([a, b])
  }
  return arr
}
