/*
https://www.codewars.com/kata/abbreviate-a-two-word-name/

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/
abbrevName=(name)=>name.split(' ').map((x,_)=>x.slice(0,1).toUpperCase()).join('.')
