/*
Training JS #13: Number object and its properties
*/
function whatNumberIsIt(n){
  if (isNaN(n))
  {
    return 'Input number is Number.NaN';
  }
  else
  switch(n){
  case Number.POSITIVE_INFINITY:
    return 'Input number is Number.POSITIVE_INFINITY';
    break;
  case Number.NEGATIVE_INFINITY:
    return 'Input number is Number.NEGATIVE_INFINITY';
    break;
  case Number.MAX_VALUE:
    return 'Input number is Number.MAX_VALUE';
    break;
  case Number.MIN_VALUE:
    return 'Input number is Number.MIN_VALUE';
    break;
  default:
    return 'Input number is ' + n;
    break;
  }
}
