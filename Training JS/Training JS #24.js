/*
Training JS #24: methods of arrayObject---splice() and slice()
*/
function threeInOne(arr){
var A=[];
  for(var i=0;i<arr.length/3;i++)
    {
      A.push(arr[i*3]+arr[i*3+1]+arr[i*3+2]);
    }
  return A;
}
