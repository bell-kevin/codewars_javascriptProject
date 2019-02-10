/*
Training JS #29: methods of arrayObject---concat() and join()
*/
bigToSmall=(arr)=>[].concat(...arr).sort((a,b)=>b-a).join('>')
