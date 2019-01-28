/*
https://www.codewars.com/kata/evil-or-odious/

The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

good luck :)
*/
var evil=(n)=>{
  var b=n.toString(2).split(''), c=0;
  for (var i=0; i<b.length;i++)
     {
       if (b[i]=='1')
         c++;
     }
    if (c%2==1)
      return "It's Odious!";
    else
      return "It's Evil!";
}
