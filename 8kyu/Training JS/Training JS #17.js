/*
Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
*/
function firstToLast(str,c){
  var first = str.indexOf(c);
  var last = str.lastIndexOf(c);
for (var i = 0; i<str.length; i++)
  if (first == -1)
    {
      return -1;
    }
  else
    {
      return last-first;
    }
}
