/*
Training JS #7: if..else and ternary operator
*/
function saleHotdogs(n){
  if (n < 5)
  {
    return n*100;
  }
  else if (n >= 5 && n < 10)
  {
    return n*95;
  }
  else
  {
    return n*90;
  }
}

/*
function saleHotdogs(n){
  return n<5 ? n*100 : n<10 ? n*95 : n*90;
}
*/
