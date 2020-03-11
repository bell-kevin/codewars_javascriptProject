/*
https://www.codewars.com/kata/59f7597716049833200001eb/train/javascript

Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers remain the same. To clarify, if we write them down on a paper and turn the paper upside down, the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers when rotated.

Given a range, return the count of upside down numbers within that range. For example, solve(0,10) = 3, because there are only 3 upside down numbers >= 0 and < 10. They are 0, 1, 8.

More examples in the test cases.

Good luck!
*/
function solve(x,y){
  let counter = 0
  for (let i = +x; i < +y; i++){
    let num = i.toString();
    if (num.match(/[23457]/g)){
      continue
    }
    let reversed = reverseNumber(num)
    if(num == reversed){
        counter++
        console.log(num)
    }
  }
  return counter
  
  function reverseNumber(number){
    return number.split('').reverse().map(item=>{
        if (item == '6')
          return '9'
        else if (item == '9')
          return '6'
        else
          return item
      }).join('')
  }  
}
