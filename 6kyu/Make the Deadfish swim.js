/*
https://www.codewars.com/kata/make-the-deadfish-swim/

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/
// Return the output array, and ignore all non-op characters
function parse(data){
  var x=0, arr=[]
  for(var i=0;i<data.length;i++){
      switch(data[i]){
        case 'i': x++
                  break
        case 'd': x--
                  break
        case 's': x=x**2
                  break
        case 'o': arr.push(x)
      }
    }
  return arr
}
