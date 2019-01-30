/*
https://www.codewars.com/kata/square-n-sum/

Complete the square sum method so that it squares each number passed into it and then sums the results together.

For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/
function squareSum(numbers){
  var res=0;
  for(var i=0;i<numbers.length;i++)
    {
      res+=Math.pow(numbers[i],2);
    }
  return res;
}
//Alternative
squareSum=(n)=>n.reduce((s,a)=>s+a*a,0);
