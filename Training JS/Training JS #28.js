/*
Training JS #28: methods of arrayObject---every() and some()
*/
function mirrorImage(arr){
var a,b,rev
  arr.some((x,i)=>{
  a=x+''
  b=arr[i+1]+''
  rev=a.split("").reverse().join("")
  return b==rev
})
 return b==rev ? [+a,+b] : [-1,-1]
}
