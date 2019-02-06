//Замена символов в строке. g for global, i for case sensitivity
str.replace(/[aeiou]/gi,'');
//Являются ли два объекта идентичными через Object.is
isNegativeZero=n=>Object.is(n,-0);
//regex(a-z, 0-9, _ , 4-16 символов)
function validateUsr(username) {
  const regex = /^[a-z\d\_]{4,16}$/;
  const res =  regex.test(username);
  return res;
}
//Убрать смежные повторяющиеся элементы массива
array.filter((item,i,a)=>!i||item!==a[i-1])
//Убрать повторяющиеся элементы массива
array.filter((item,i,a)=>a.indexOf(item)===i)
