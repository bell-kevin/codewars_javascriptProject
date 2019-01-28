/*
https://www.codewars.com/kata/vowel-count/

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  var v = 0;
  var arr = str.split('');
  for (var i=0;i<str.length;i++)
    {
      switch(arr[i])
        {
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u': v++;
        }
    }
  return v;
}

//Alternative
function getCount(str) {
  var v = 0;
  for (index in str)
    {
      switch(str[index])
        {
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u': v++;
                    break;
        }
    }
  return v;
}
