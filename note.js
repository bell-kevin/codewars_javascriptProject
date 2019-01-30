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
