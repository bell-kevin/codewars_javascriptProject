/*
https://www.codewars.com/kata/ordered-count-of-characters/

Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/
function orderedCount(t) {
  var arr=[]
  while(t.length>0)
    {
      var reg = new RegExp(t[0],'g')
      arr.push([t[0],t.match(reg).length])
      t=t.replace(reg,'')
    }
  return arr
}