/*
https://www.codewars.com/kata/did-i-finish-my-sudoku/
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

Sudoku rules:

Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

Rows:

There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

Columns:

There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

Regions

A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.
*/
function doneOrNot(board) {
  var row = new Array(9).fill(0),
      col = new Array(9).fill(0),
      sqr = new Array(9).fill(0)

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      row[board[i][j] - 1]++
      col[board[j][i] - 1]++
    }
    if (row.join('') != 111111111 || col.join('') != 111111111)
      return "Try again!"
    row.fill(0)
    col.fill(0)
  }
  var r = 0,
      c = 0
  while (r < 9) {
    while (c < 9) {
      for (i = r; i < r + 3; i++) {
        for (var j = c; j < c + 3; j++) {
          sqr[board[i][j] - 1]++
        }
      }
      if (sqr.join('') != 111111111)
        return "Try again!"
      sqr.fill(0)
      c += 3
    }
    r += 3
    c = 0
  }
  return "Finished!"
}
