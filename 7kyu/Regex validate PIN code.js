/*
https://www.codewars.com/kata/regex-validate-pin-code/

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/
function validatePIN (pin) {
  var p = pin.length, c=0;
  if (p!=4 && p!=6)
    return false;
    else
      {
        for (var i=0;i<p;i++)
         {
            if (pin[i]>='0' && pin[i]<='9')
              c++;
         }
         return (c==p);
      }
}
