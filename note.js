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
array.filter((x,i,arr)=>!i||x!==arr[i-1])
//Убрать повторяющиеся элементы массива
array.filter((x,i,arr)=>arr.indexOf(x)===i)

//Следующий скрипт использует метод replace() экземпляра строки String для сопоставления с именем в формате
//имя фамилия и выводит его в формате фамилия, имя. В тесте замены скрипт использует заменители $1 и $2,
//которые заменяются на результаты соответствующих сопоставившихся подгрупп регулярного выражения.
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);
// пример с русскими буквами
var re = /([а-яё]+)\s([а-яё]+)/i;
var str = 'Джон Смит';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);
