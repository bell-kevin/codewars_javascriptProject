/*
https://www.codewars.com/kata/beginner-series-number-2-clock/

Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to miliseconds.

#####Example:

past(0, 1, 1) == 61000
Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!
*/
past=(h, m, s)=>(((h*60)+m)*60+s)*1000;
