/*
Training JS #37: Unlock new weapon---RegExp Object
*/
function countAnimals(a,c){
var res=[]
  for(var i=0;i<c.length;i++)
    res.push(a.split(c[i]).length-1)
  return res
}
