/*
https://www.codewars.com/kata/olympic-rings/

To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

Dots over i's and any other letters don't count as rings.
*/
olympicRing=(a)=>{
var s=Math.floor(a.replace(/[abdegopqADOPQR]/g,'0').replace(/[B]/g,'00').replace(/[^0]/g,'').length/2)
  console.log(s)
  if (s>3)
    return 'Gold!'
  else if (s==3)
    return 'Silver!'
  else if (s==2)
    return 'Bronze!'
  else
    return 'Not even a medal!'
}
