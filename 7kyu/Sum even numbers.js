/*
https://www.codewars.com/kata/sum-even-numbers/

Write a function named sumEvenNumbers, taking an array of integers as single parameter. Your function must return the sum of the even values of this array.

For example, considering this input value : [4,3,1,2,5,10,6,7,9,8], then your function should return 30 (because 4 + 2 + 10 + 6 + 8 = 30).
*/
sumEvenNumbers=(inp)=>inp.filter((x,_)=>x%2==0).reduce((a,b)=>a+b)
