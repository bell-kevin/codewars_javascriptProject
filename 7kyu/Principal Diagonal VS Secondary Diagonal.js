/*
https://www.codewars.com/kata/principal-diagonal-vs-secondary-diagonal/

Principal Diagonal -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.

Secondary Diagonal -- the secondary diagonal of amatrix identifies those elements of the matrix running from North-East to South-West.

For example:

matrix:             [1, 2, 3]
                    [4, 5, 6]
                    [7, 8, 9]

principal diagonal: [1, 5, 9]
secondary diagonal: [3, 5, 7]
Task
Your task is to find which diagonal is "larger": which diagonal has a bigger sum of their elements.

If the principal diagonal is larger, return "Principal Diagonal win!"
If the secondary diagonal is larger, return "Secondary Diagonal win!"
If they are equal, return "Draw!"
Note: You will always receive matrices of the same dimension.
*/
function diagonal(m) {
  var p = 0,
      s = 0
  for (var i = 0; i < m.length; i++) {
    p += m[i][i]
    s += m[i][m.length - i - 1]
  }
  if (p > s)
    return "Principal Diagonal win!"
  else if (p < s)
    return "Secondary Diagonal win!"
  else
    return "Draw!"
}
