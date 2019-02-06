/*
Training JS #36: methods of Math---kata author's lover:random()
*/
function rndCode(){
var up="ABCDEFGHIJKLM", num="0123456789", sym="~!@#$%^&*"
var str=''
  for(var i=0;i<2;i++)
    str+=up[~~(up.length*Math.random())]
  for(var i=0;i<4;i++)
    str+=num[~~(num.length*Math.random())]
  for(var i=0;i<2;i++)
    str+=sym[~~(sym.length*Math.random())]
return str
}
