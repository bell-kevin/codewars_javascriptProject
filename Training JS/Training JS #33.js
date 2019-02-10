/*
Training JS #33: methods of Math---max() min() and abs()
*/
function maxMin(arr1,arr2){
  var dif=[]
  for(var i=0;i<arr1.length;i++)
    dif.push(Math.abs(arr1[i]-arr2[i]))
  return [Math.max(...dif),Math.min(...dif)]
}
