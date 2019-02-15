/*
https://www.codewars.com/kata/number-1-matrices-making-an-alternating-sum/

We have a matrix of integers with m rows and n columns.

source: imgur.com

We want to calculate the total sum for the matrix:

source: imgur.com

As you can see, the name "alternating sum" of the title is due to the sign of the terms that changes from one term to its contiguous one and so on.

Let's see an example:

matrix = [[1, 2, 3], [-3, -2, 1], [3, - 1, 2]]

total_sum = (1 - 2 + 3) + [-(-3) + (-2) - 1] + [3 - (-1) + 2] = 2 + 0 + 6 = 8
You may be given matrixes with their dimensions between these values:10 < m < 300 and 10 < n < 300.

More example cases in the Example Test Cases. Enjoy it!!
*/
scoreMatrix=(m)=>m.map((x,i)=>x.map((a,j)=>((-1)**(i+j+2))*a).reduce((a,b)=>a+b)).reduce((a,b)=>a+b)
