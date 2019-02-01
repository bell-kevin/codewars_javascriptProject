/*
https://www.codewars.com/kata/students-final-grade/

Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples:

finalGrade(100, 12);  // 100
finalGrade(99, 0);    // 100
finalGrade(10, 15);   // 100

finalGrade(85, 5);    // 90

finalGrade(55, 3);    // 75

finalGrade(55, 0);    // 0
finalGrade(20, 2);    // 0
*/
function finalGrade (ex,ps) {
  if (ex>90||ps>10)
    return 100;
  else if (ex>75&&ps>=5)
    return 90;
  else if (ex>50&&ps>=2)
    return 75;
  else return 0;
}
//Alternative
finalGrade=(ex,ps)=> ex>90||ps>10 ? 100 : ex>75&&ps>=5 ? 90 : ex>50&&ps>=2 ? 75 : 0;
