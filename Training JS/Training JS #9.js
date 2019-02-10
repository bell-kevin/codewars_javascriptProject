/*
Training JS #9: loop statement --while and do..while
*/
function padIt(str,n){
  while (n>0)
    {
      if (n%2==1)
        {
          str = '*' + str;
          n--;
        }
      else
        {
          str = str + '*';
          n--;
        }
    }
  return str;
}
