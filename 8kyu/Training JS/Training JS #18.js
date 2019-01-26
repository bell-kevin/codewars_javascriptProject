/*
Methods of String object--concat() split() and its good friend join()
*/
function splitAndMerge(str,sp){
  var words = str.split(' ');
  for (var i=0; i<words.length; i++)
    {
      words[i] = words[i].split('').join(sp);
    }
  return words.join(' ');
}
