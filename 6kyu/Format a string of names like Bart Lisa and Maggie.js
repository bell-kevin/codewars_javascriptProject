/*
https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/
function list(names) {
  var res = names.map(a => a.name).join(', ')
  var reg = /(.+)[,]([^,]+)/g;
  return res.replace(reg, '$1 &$2');
}
