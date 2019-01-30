/*
https://www.codewars.com/kata/removing-elements/

Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

Example:

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
None of the arrays will be empty, so you don't have to worry about that!
*/
function removeEveryOther(arr){
  for(var i=1;i<arr.length;i++)
    {
      arr.splice(i,1);
    }
    return arr;
}
