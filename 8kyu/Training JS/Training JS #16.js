/*
Training JS #16: Methods of String object--slice(), substring() and substr()
*/
function cutIt(arr){
var min_length = arr[0].length;
  for (var i=1; i<arr.length; i++)
    {
      if (arr[i].length < min_length)
        {
          min_length = arr[i].length;
        }
    }

  for (var i=0; i<arr.length; i++)
    {
      arr[i] = arr[i].slice(0,min_length);
    }
return arr;
}
