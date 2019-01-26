/*
Methods of String object--concat() split() and its good friend join()
*/
function splitAndMerge(str,sp){
  var words = str.split(' ');
  var sentence = [];
  for (var i=0; i<words.length; i++)
    {
      sentence[i] = words[i].split('').join(sp);
    }
  return sentence.join(' ');
}
