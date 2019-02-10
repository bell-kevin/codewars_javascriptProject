/*
Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()
*/
function infiniteLoop(arr,d,n){
  var t=[].concat(...arr)
  var c=0, l=t.length
  for(var i=0;i<arr.length;i++){
      for(var j=0;j<arr[i].length;j++){
          if (d=='left'){
              if (c<Math.abs(l-n))
                arr[i][j]=t[c+n]
              else
                arr[i][j]=t[Math.abs(l-c-n)]
              c++
            }
          else{
              if (c<n)
                arr[i][j]=t[l+c-n]
              else
                arr[i][j]=t[c-n]
              c++
            }
        }
    }
  return arr
}
