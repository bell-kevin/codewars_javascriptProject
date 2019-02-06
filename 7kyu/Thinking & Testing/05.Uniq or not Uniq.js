testit=(a,b)=>
a.sort((x,y)=>x-y).filter((i,p,arr)=>!p||i!==arr[p-1])
.concat(b.sort((x,y)=>x-y).filter((i,p,arr)=>!p||i!==arr[p-1]))
.sort((x,y)=>x-y)
