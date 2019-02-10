/*
Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
*/
function topSecret(str){
  // Разбиваем строку на массив из слов
  var words = str.split(' ');

  for (var i=0;i<words.length;i++)
    {
      //Разбиваем каждый элемент массива из слов на массив из букв каждого слова
      var chars = words[i].split('');

      for (var j=0;j<chars.length;j++)
        {
          var c = chars[j];
          // Get its code
          var code = c.charCodeAt();

          // Uppercase letters
          if ((code >= 65) && (code <= 90))
            if (code - 65 - 3 >= 0)
          	  chars[j] = String.fromCharCode(((code - 65 - 3) % 26) + 65);
            else
              chars[j] = String.fromCharCode(((code - 65 - 3) + 26) + 65);

          // Lowercase letters
          else if ((code >= 97) && (code <= 122))
            if (code - 97 - 3 >= 0)
          	  chars[j] = String.fromCharCode(((code - 97 - 3) % 26) + 97);
            else
              chars[j] = String.fromCharCode(((code - 97 - 3) + 26) + 97);
        }
        words[i] = chars.join('');
    }
    return words.join(' ');

}
//question1: The top secret file number is...
answer1="3745";
//question2: Super agent's name is...
answer2="RILc";
//question3: He stole the treasure is...
answer3="Expired biscuits";
