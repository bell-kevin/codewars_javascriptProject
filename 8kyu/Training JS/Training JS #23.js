/*
Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()
*/
function infiniteLoop(arr,d,n){
  var arr_t=[], arr_s=[];
  for (var i=0; i< arr.length; i++)
    {
      for (var j=0; j< arr[i].length; j++)
        {
          arr_t.push(arr[i][j]);
          arr_s.push(0);
        }
    }
  var l = arr_t.length;
  //Сдвиг элементов во временных массивах
  for (var i=0; i<l; i++)
    {
  //Сдвиг влево
      if (d == 'left')
        {
          if (i<n)
            {
              var x = l-n-i;
              arr_s[x] = arr_t[i];
            }
          else
            {
              arr_s[i] = arr_t[i+n];
            }
        }
  //Сдвиг вправо
      else
        {
          if (i<n)
            {
              var x = l-n-i;
              arr_s[i] = arr_t[x];
            }
          else
            {
              arr_s[i] = arr_t[i-n];
            }
        }
    }

  //Перемещение элементов из временных массивов в исходный
  var k = 0;
  for (var i=0; i< arr.length; i++)
    {
      for (var j=0; j< arr[i].length; j++)
        {
          arr[i][j] = arr_s[k];
          k++;
        }
    }
    return arr;

}
