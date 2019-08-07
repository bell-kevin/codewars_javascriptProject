/*
https://www.codewars.com/kata/snakes-and-ladders-1/train/javascript

Introduction
 	Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)


Task
 	Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.
The Board

Rules
 	1.  There are two players and both start off the board on square 0.

2.  Player 1 starts and alternates with player 2.

3.  You follow the numbers up the board in order 1=>100

4.  If the value of both die are the same then that player will have another go.

5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)
Returns
 	Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

Return Game over! if a player has won and another player tries to play.

Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.

Good luck and enjoy!

Kata Series
If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.
*/
var p1_pos = 0,
  p2_pos = 0,
  player_active = 0,
  message,
  gameover = 0;

function SnakesLadders() {};

SnakesLadders.prototype.play = function(die1, die2) {
  function change_player() {
    if (die1 != die2) {
      player_active++;
    }
  }
  console.log(die1, die2)
  if (gameover == 1) {
    return "Game over!"
  }
  if (player_active % 2 == 0) {
    p1_pos += die1 + die2;
    if (p1_pos == 100) {
      change_player();
      gameover = 1;
      return "Player 1 Wins!";
    }
    if (p1_pos > 100) {
      p1_pos = 200 - p1_pos;
    }
    p1_pos = up_down(p1_pos);
  } else {
    p2_pos += die1 + die2;
    if (p2_pos == 100) {
      change_player();
      gameover = 1;
      return "Player 2 Wins!";
    }
    if (p2_pos > 100) {
      p2_pos = 200 - p2_pos;
    }
    p2_pos = up_down(p2_pos);
  }
  message = player_active % 2 == 0 ? "Player 1 is on square " + p1_pos : "Player 2 is on square " + p2_pos;
  change_player();
  console.log(p1_pos, p2_pos);
  return message
}

function up_down(pos) {
  switch (pos) {
    case 2:
      return 38
    case 7:
      return 14
    case 8:
      return 31
    case 15:
      return 26
    case 16:
      return 6
    case 21:
      return 42
    case 28:
      return 84
    case 36:
      return 44
    case 46:
      return 25
    case 49:
      return 11
    case 51:
      return 67
    case 62:
      return 19
    case 64:
      return 60
    case 71:
      return 91
    case 74:
      return 53
    case 78:
      return 98
    case 87:
      return 94
    case 89:
      return 68
    case 92:
      return 88
    case 95:
      return 75
    case 99:
      return 80
    default:
      return pos
  }
}
