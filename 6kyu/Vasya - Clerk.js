/*
https://www.codewars.com/kata/vasya-clerk/

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/
function tickets(pil) {
  var money = []
  for (var i = 0; i < pil.length; i++) {
    if (pil[i] == 25)
      money.push(pil[i])
    else if (pil[i] == 50) {
      if (money.indexOf(25) != -1) {
        money.splice(money.indexOf(25), 1, pil[i])
      } else return 'NO'
    } else if (pil[i] == 100) {
      var change = 75
      while (change != 0) {
        var pos_50 = money.indexOf(50),
            pos_25 = money.indexOf(25)
        if (pos_50 != -1 || pos_25 != -1) {
          if (pos_50 != -1 && change >= 50) {
            money.splice(pos_50, 1, pil[i])
            change -= 50
          } else if (pos_25 != -1 && change >= 25) {
            money.splice(pos_25, 1, pil[i])
            change -= 25
          } else return 'NO'
        } else return 'NO'
      }
    }
  }
  return 'YES'
}
