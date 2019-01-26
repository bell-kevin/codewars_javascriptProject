/*
Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
*/
function alienLanguage(str){
  str = str.toUpperCase();
  var words = str.split(' ');

  for (var i=0; i<words.length; i++)
    {
      var x = words[i];
      var y = x.length-1;
      words[i] = x.slice(0,y) + x[y].toLowerCase();
    }
  return words.join(' ');
}
