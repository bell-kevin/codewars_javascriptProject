/*
Training JS #27: methods of arrayObject---filter()
*/
function countGrade(scores){
var g={S:0, A:0, B:0, C:0, D:0, X:0};
var arr=scores.filter(x=>
   x==100           ? g.S++ :
  (x>=90 && x<100)  ? g.A++ :
  (x>=80 && x<90)   ? g.B++ :
  (x>=60 && x<80)   ? g.C++ :
  (x>=0 && x<60)    ? g.D++ :
                      g.X++ )
  return g;
}
