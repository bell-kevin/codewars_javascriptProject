/*
https://www.codewars.com/kata/tick-toward/

Define a function that generates medial values between two coordinates and returns them in an array from start to target. For example, if the starting point is [1,1] and the target point is [3,2] then the shortest route from start to target would be [[1,1], [2,2], [3,2]]. The route should go only through integral coordinates.

Note: you should move diagonally until the path from your current position to the target can be represented as a fully horizontal/vertical line.

Examples:
tickToward([5,5],[5,7])  // => [[5,5],[5,6],[5,7]]
tickToward([3,2],[4,5])  // => [[3,2],[4,3],[4,4],[4,5]]
tickToward([5,1],[5,-2]) // => [[5,1],[5,0],[5,-1],[5,-2]]
*/
function tickToward(start, end) {
  var x = start[0],
      y = start[1],
      x_e = end[0],
      y_e = end[1],
      map = []
  map.push(start)
  while (x != x_e || y != y_e) {
    if (x != x_e) {
      (x_e > x) ? x++ : x--
    }
    if (y != y_e) {
      (y_e > y) ? y++ : y--
    }
    map.push([x, y])
  }
  return map
}
