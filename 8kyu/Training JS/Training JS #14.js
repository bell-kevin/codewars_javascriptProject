/*
Training JS #14: Methods of Number object--toString() and toLocaleString()
*/
function colorOf(r,g,b){
  var r0,g0,b0;
  r<16 ? r0='0' : r0='';
  g<16 ? g0='0' : g0='';
  b<16 ? b0='0' : b0='';
  return '#' + r0 + r.toString(16) + g0 + g.toString(16) + b0 + b.toString(16);
}
