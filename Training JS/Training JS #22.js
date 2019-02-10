/*
Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction
*/
function shuffleIt(arr,...swap){
  for (var i=0; i<swap.length; i++)
  {
    var a = swap[i][0];
    var b = swap[i][1];
    [arr[a],arr[b]] = [arr[b],arr[a]];
  }
  return arr;
}

//Alternative
var shuffleIt=(arr,...swap)=>{
  for (var i=0; i<swap.length; i++)
  {
    var [a,b] = [swap[i][0],swap[i][1]];
    [arr[a],arr[b]] = [arr[b],arr[a]];
  }
  return arr;
}
