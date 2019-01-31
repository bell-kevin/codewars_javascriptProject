/*
https://www.codewars.com/kata/simple-validation-of-a-username-with-regex/

Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/
function validateUsr(username) {
  const regex = /^[a-z\d\_]{4,16}$/;
  const res =  regex.test(username);
  return res;
}
//Alternative
validateUsr=username=>/^[a-z\d_]{4,16}$/.test(username);
