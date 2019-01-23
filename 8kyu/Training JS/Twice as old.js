/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/
function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (sonYearsOld == 0)
    return dadYearsOld;

  else if
      (dadYearsOld/sonYearsOld < 2)
        {
          for (var i = 0; ; i++)
            {
              if
                (sonYearsOld * 2 == (dadYearsOld + i)
                &&
                (dadYearsOld + i) % sonYearsOld == 0)
                {
                  return i;
                  break;
                }
            }
          }

  else
    for (var i = 0; ; i++)
      {
        if
          (sonYearsOld * 2 == (dadYearsOld - i)
            &&
            (dadYearsOld - i) % sonYearsOld == 0)
        {
          return i;
          break;
        }
      }
}
