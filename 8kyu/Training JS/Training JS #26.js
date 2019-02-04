/*
Training JS #26: methods of arrayObject---map()
*/
function isolateIt(arr){
  var a=arr.slice(),str,x;
  for(var i=0;i<a.length;i++)
    {
      str=a[i];
      x=(a[i].length%2==0 ? 0 : 1);
      a[i]=str.slice(0,a[i].length/2)+'|'+str.slice(a[i].length/2+x,a[i].length);
    }
    return a
}
//Alternative
isolateIt=(arr)=>arr.map(x=>(x.slice(0,x.length/2)+'|'+x.slice(-x.length/2)))
