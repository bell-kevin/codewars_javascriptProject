/*
Training JS #25: methods of arrayObject---reverse() and sort()
*/
function sortIt(arr){
  var array = arr.slice(0);
  const count = {};
  array.forEach((x) => count[x] = (count[x]||0) + 1);
  return array.sort((a, b) => count[a] - count[b] || b - a);
}
