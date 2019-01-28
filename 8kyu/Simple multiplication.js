/*
https://www.codewars.com/kata/simple-multiplication/

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/
var simpleMultiplication=(n)=>{
  var r=0;
  n%2==0 ? r=n*8 : r=n*9;
  return r;
}
