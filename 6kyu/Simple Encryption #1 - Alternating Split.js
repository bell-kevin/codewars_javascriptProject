/*
https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/

For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

This kata is part of the Simple Encryption Series:
Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference
Simple Encryption #3 - Turn The Bits Around
Simple Encryption #4 - Qwerty

Have fun coding it and please don't forget to vote and rank this kata! :-)
*/
function encrypt(text, n) {
  if (text != null && text != '' && n > 0) {
    for (var i = 0; i < n; i++) {
      text = text.split('').filter((_, i) => i % 2 == 1).concat(text.split('').filter((_, i) => i % 2 == 0)).join('')
    }
  }
  return text
}

function decrypt(encr, n) {
  if (encr == null || encr == '' || n <= 0) return encr
  var res, t1, t2, e = ''
  for (var i = 0; i < n; i++) {
    res = ''
    if (encr.length % 2 == 1) {
      e = encr.slice(-1)
      encr = encr.slice(0, encr.length - 1)
    }
    for (var j = 0; j < encr.length / 2; j++) {
      t1 = encr.substr(j, 1)
      t2 = encr.substr((encr.length / 2 + j), 1)
      res += t2 + t1
    }
    res += e
    encr = res
  }
  return res
}
