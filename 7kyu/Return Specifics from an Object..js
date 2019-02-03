/*
https://www.codewars.com/kata/return-specifics-from-an-object/

Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.

array should return numbers first then all the method names in the order they are in the object
strings, booleans, arrays should be ignored.
if the object is empty, then the array should return the following string: The Object is Empty
Example:

returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
This would return [1,2,3,'e']
*/
function returnSpecifics(obj){
  var arr=[];
  for (var i in obj)
    {
      if (typeof obj[i]==='number')
        arr.push(obj[i]);
    }
  for (var i in obj)
    {
      if (typeof obj[i]==='function')
        arr.push(i);
    }
  if (arr.length==0)
    arr.push('The Object is Empty');
  return arr;
}
//Alternative
function returnSpecifics(obj){
  var n=[],f=[];
  for (var i in obj)
    {
      if (typeof obj[i]==='number')
        n.push(obj[i]);
      if (typeof obj[i]==='function')
        f.push(i);
    }
  n=n.concat(f);
  if (n.length==0)
    n.push('The Object is Empty');
  return n;
}
