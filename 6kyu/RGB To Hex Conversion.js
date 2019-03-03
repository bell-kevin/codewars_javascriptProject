/*
https://www.codewars.com/kata/rgb-to-hex-conversion/

The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/
function rgb(r, g, b) {
  return (convert(r) + convert(g) + convert(b)).toUpperCase()
}

function convert(x) {
  if (x < 0) x = 0
  if (x > 255) x = 255
  return x = x < 16 ? 0 + x.toString(16) : x.toString(16)
}
