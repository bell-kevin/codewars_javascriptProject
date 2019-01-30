function testit(s){
  var res='';
    if (s.length<=1)
      return s;
    else
        {
          for(var i=0;i<s.length;i+=2)
            {
              if (s.length%2==1 && i+1==s.length)
                {
                  res+=s[s.length-1];
                  break;
                }
              res+=String.fromCharCode(Math.floor((s.charCodeAt(i)+s.charCodeAt(i+1))/2));
            }
            return res;
        }
}
