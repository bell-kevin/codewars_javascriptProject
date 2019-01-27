/*
Training JS #21: Methods of String object--trim() and the string template
*/
function fiveLine(s){
  var str = s.trim();
  var res = ``;
  for (var i=0; i<5;i++)
    {
      for (var j=0; j<=i;j++)
      {
        res = res + `${str}`;
      }
        if (j!=5)
        res = res + `\n`;
    }
    return `${res}`;
}
