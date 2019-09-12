/*
https://www.codewars.com/kata/four-letter-words-mutations/train/javascript

Our Setup
Alice and Bob work in an office. When the workload is light and the boss isn't looking, they often play simple word games for fun. This is one of those days!

This Game
Today Alice and Bob are playing what they like to call Mutations, where they take turns trying to "think up" a new four-letter word identical to the prior word except for one letter. They just keep on going until their memories fail out.

Their Words
Alice and Bob each have a memory capacity of 10 to 2000 four-letter words. Memory words and the inital game word are all drawn at random from a pool of 4000 (four-letter, lowercased) words. The expression to "think up" a new word means that the player must submit as their reponse word the first valid, unused word that appears in their memory (by lowest array index), as their memories are ordered from the most "memorable" words to the least.

The Rules
a valid response word must contain four different letters
1 letter is replaced while the other 3 stay in position
it must be the lowest indexed valid word in their memory
this word cannot have already been used during the game
the final player to provide a valid word will win the game
if both players fail on the initial word, there is no winner
Your Task
To determine the winner!

Some Examples
alice = plat,rend,bear,soar,mare,pare,flap,neat,clan,pore

bob = boar,clap,farm,lend,near,peat,pure,more,plan,soap

1) In the case of word = "send" and first = 0:

Alice responds to send with rend
Bob responds to rend with lend
Alice has no valid response to lend
Bob wins the game.
2) In the case of word = "flip" and first = 1:

Bob has no valid response to flip
Alice responds to flip with flap
Alice wins the game.
3) In the case of word = "maze" and first = 0:

Alice responds to maze with mare
Bob responds to mare with more
Alice responds to more with pore
Bob responds to pore with pure
Alice responds to pure with pare
Bob has no valid response to pare
Alice wins the game.
4) In the case of word = "calm" and first = 1:

Bob has no valid response to calm
Alice has no valid response to calm
Neither wins the game.
Input
let alice;  //  array of words in Alice's memory (10 <= n <= 2000)
let bob;    //  array of words in Bob's memory (10 <= n <= 2000)
let word;   //  string of the initial challenge word
let first;  //  integer of whom begins: 0 for Alice, 1 for Bob
Output
return  0  //  if Alice wins
return  1  //  if Bob wins
return -1  //  if both fail
Enjoy!
If interested, I also have this kata as well as this other kata to consider solving.
*/

/*
https://www.codewars.com/kata/four-letter-words-mutations/train/javascript

Our Setup
Alice and Bob work in an office. When the workload is light and the boss isn't looking, they often play simple word games for fun. This is one of those days!

This Game
Today Alice and Bob are playing what they like to call Mutations, where they take turns trying to "think up" a new four-letter word identical to the prior word except for one letter. They just keep on going until their memories fail out.

Their Words
Alice and Bob each have a memory capacity of 10 to 2000 four-letter words. Memory words and the inital game word are all drawn at random from a pool of 4000 (four-letter, lowercased) words. The expression to "think up" a new word means that the player must submit as their reponse word the first valid, unused word that appears in their memory (by lowest array index), as their memories are ordered from the most "memorable" words to the least.

The Rules
a valid response word must contain four different letters
1 letter is replaced while the other 3 stay in position
it must be the lowest indexed valid word in their memory
this word cannot have already been used during the game
the final player to provide a valid word will win the game
if both players fail on the initial word, there is no winner
Your Task
To determine the winner!

Some Examples
alice = plat,rend,bear,soar,mare,pare,flap,neat,clan,pore

bob = boar,clap,farm,lend,near,peat,pure,more,plan,soap

1) In the case of word = "send" and first = 0:

Alice responds to send with rend
Bob responds to rend with lend
Alice has no valid response to lend
Bob wins the game.
2) In the case of word = "flip" and first = 1:

Bob has no valid response to flip
Alice responds to flip with flap
Alice wins the game.
3) In the case of word = "maze" and first = 0:

Alice responds to maze with mare
Bob responds to mare with more
Alice responds to more with pore
Bob responds to pore with pure
Alice responds to pure with pare
Bob has no valid response to pare
Alice wins the game.
4) In the case of word = "calm" and first = 1:

Bob has no valid response to calm
Alice has no valid response to calm
Neither wins the game.
Input
let alice;  //  array of words in Alice's memory (10 <= n <= 2000)
let bob;    //  array of words in Bob's memory (10 <= n <= 2000)
let word;   //  string of the initial challenge word
let first;  //  integer of whom begins: 0 for Alice, 1 for Bob
Output
return  0  //  if Alice wins
return  1  //  if Bob wins
return -1  //  if both fail
Enjoy!
If interested, I also have this kata as well as this other kata to consider solving.
*/

function mutations(alice, bob, word, first) {
    var player = first,
        current_word = word,
        current_score,
        points = [undefined, undefined],
        used_words = [word],
        alice_dict = [...alice],
        bob_dict = [...bob];
    while (true) {
        current_score = check(current_word, player ? bob_dict : alice_dict);
        points.push(current_score);
        points.shift();
        if (current_score == 0) {
            if (points[0] == undefined) {
                player = player ? 0 : 1;
                continue
            } else if (points[0] == 0) {
                return -1
            } else if (points[0] == 1) {
                return player ? 0 : 1
            }
        }
        if (current_score == 1 && points[0] == 0) {
            return player
        }
        player = player ? 0 : 1;
    }

    function check(check_word, dictionary) {
        for (var i = 0; i < dictionary.length; i++) {
            var compared_symbols = 0;
            for (var j = 0; j < 4; j++) {
                if (check_word[j] == dictionary[i][j]) {
                    compared_symbols++;
                }
            }
            if (compared_symbols == 3) {
                if (unique_words(dictionary[i]) || unique_letters(dictionary[i]) < 4) {
                    continue
                }
                current_word = dictionary[i];
                player ? used_words.push(bob_dict.splice(i, 1)[0]) : used_words.push(alice_dict.splice(i, 1)[0]);
                return 1;
            }
        }
        return 0;

        function unique_letters(unique_letters_word) {
            var arr = unique_letters_word.split('');
            return ([...new Set(arr)].length)
        }

        function unique_words(unique_word) {
            if (used_words.includes(unique_word))
                return 1
        }
    }
}