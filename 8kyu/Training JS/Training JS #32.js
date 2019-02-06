/*
Training JS #32: methods of Math---round() ceil() and floor()
*/
function roundIt(n){
  var s=(n+'').split('.')
  var r
    s[0].length<s[1].length ? r=Math.ceil(n) :
    s[0].length>s[1].length ? r=Math.floor(n) :
    r=Math.round(n)
    return r
}
