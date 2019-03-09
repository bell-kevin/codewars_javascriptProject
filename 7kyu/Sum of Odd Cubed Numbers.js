/*
https://www.codewars.com/kata/sum-of-odd-cubed-numbers/

Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.

Note: There are ONLY integers in the JAVA and C# versions of this Kata.
*/
function cubeOdd(arr) {
  return arr.filter(x => typeof x != 'number').length > 0 ? undefined :
         arr.map(x => x ** 3).filter(x => Math.abs(x) % 2 == 1).reduce((a, b) => a + b)
}
