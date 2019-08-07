/*
https://www.codewars.com/kata/greed-is-good/train/javascript

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450
*/
function score(dice) {
  var points = 0;
  var digits = Array(6).fill(0);
  for (var i = 0; i < dice.length; i++) {
    switch (dice[i]) {
      case (1):
        digits[0]++;
        break
      case (2):
        digits[1]++;
        break
      case (3):
        digits[2]++;
        break
      case (4):
        digits[3]++;
        break
      case (5):
        digits[4]++;
        break
      case (6):
        digits[5]++;
        break
    }
  }
  for (i = 0; i < digits.length; i++) {
    if (digits[i] >= 3) {
      if (i == 0) {
        points += 1000;
      } else {
        points += (i + 1) * 100;
      }
      digits[i] -= 3;
    }
  }
  points += digits[0] * 100 + digits[4] * 50;
  return points
}
