/*
https://www.codewars.com/kata/array-plus-array/

Instructions
Output
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/
arrayPlusArray = (arr1, arr2) => arr1.map((x, i) => x + arr2[i]).reduce((a, b) => a + b)
