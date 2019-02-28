/*
https://www.codewars.com/kata/convert-string-to-camel-case/

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/
function toCamelCase(str) {
  var s, sep
  if (str.indexOf('-') == -1)
    sep = '_'
  else
    sep = '-'
  s = str.split(sep)
  for (var i = 1; i < s.length; i++)
    s[i] = s[i].slice(0, 1).toUpperCase() + s[i].slice(1)
  return s.join('')
}
//Alternative
toCamelCase = str => str.replace(/[-_](\w)/g, (_, ltr) => ltr.toUpperCase())
