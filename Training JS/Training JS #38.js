/*
Training JS #38: Regular Expression--"^","$", "." and test()
*/
function findSimilarity(str,word){
  var s='^'+word[0]+word.slice(1,-1).replace(/./g,'.')+word.slice(-1)+'$'
  var reg = new RegExp(s,'gi')
  var w_a=str.split(' ')
  var res=[]
    for(var i=0;i<w_a.length;i++)
        if (w_a[i].match(reg))
          res.push(w_a[i])
  return res.join(' ')
}
