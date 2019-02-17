/*
https://www.codewars.com/kata/rot13-1/

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/
function rot13(str) {
  var words = str.split(' ')
  for (var i = 0; i < words.length; i++) {
    var chars = words[i].split('')
    for (var j = 0; j < chars.length; j++) {
      var c = chars[j]
      var code = c.charCodeAt()
      if ((code >= 65) && (code <= 90))
        if (code - 65 - 13 >= 0)
          chars[j] = String.fromCharCode(((code - 65 - 13) % 26) + 65)
      else
        chars[j] = String.fromCharCode(((code - 65 - 13) + 26) + 65)
      else if ((code >= 97) && (code <= 122))
        if (code - 97 - 13 >= 0)
          chars[j] = String.fromCharCode(((code - 97 - 13) % 26) + 97)
      else
        chars[j] = String.fromCharCode(((code - 97 - 13) + 26) + 97)
    }
    words[i] = chars.join('')
  }
  return words.join(' ')
}
