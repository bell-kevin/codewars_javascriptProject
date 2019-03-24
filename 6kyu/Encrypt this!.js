/*
https://www.codewars.com/kata/encrypt-this/

Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/
function encryptThis(text) {
return text.split(' ')
      .map(a => a.charCodeAt(0) + a.slice(1)
      .replace(/^(\w)(\w*)?(\w)$/, '$3$2$1'))
      .join(' ')
}
