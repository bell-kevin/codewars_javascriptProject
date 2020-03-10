/*
https://www.codewars.com/kata/5e602796017122002e5bc2ed/train/javascript

The Rub

You need to make a function that takes an object as an argument, and returns a very similar object but with a special property. The returned object should allow a user to access values by providing only the beginning of the key for the value they want. For example if the given object has a key idNumber, you should be able to access its value on the returned object by using a key idNum or even simply id. Num and Number shouldn't work because we are only looking for matches at the beginning of a key.

Be aware that you could simply add all these partial keys one by one to the object. However, for the sake of avoiding clutter, we don't want to have a JSON with a bunch of nonsensical keys. Thus, in the random tests there will be a test to check that you did not add or remove any keys from the object passed in or the object returned.

Also, if a key is tested that appears as the beginning of more than one key in the original object (e.g. if the original object had a key idNumber and idString and we wanted to test the key id) then return the value corresponding with whichever key comes first alphabetically. (In this case it would be idNumbers value because it comes first alphabetically.)

Example

let o = partialKeys({ abcd: 1 })

o.abcd === 1 // true
o.abc === 1 // true
o.ab === 1 // true
o.a === 1 // true

o.b === 1 // false!

Object.keys(o) // ['abcd']
*/
function partialKeys (obj) {
let objProxy = new Proxy(obj, {
  get(target, prop) {
    if (prop in target) {
      return target[prop]
    } else {
      let length = prop.length;
      let propsArr = [];
      while (length >= 1){
        for (let fullProp in target){
          if (fullProp.startsWith(prop.slice(0, length))){
            propsArr.push({key: fullProp, value: target[fullProp]})
          }
         }
         if (propsArr.length > 0){
           if (propsArr.length==1) return propsArr[0].value;
           else{ 
             propsArr.sort((acc,item)=>{
               return acc.key > item.key 
             }, propsArr[0])
           }
           return propsArr[0].value
         }
         length--
      }
    }
    return void 0
  }
});
return objProxy
}
