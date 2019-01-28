/*
https://www.codewars.com/kata/coding-3min-hacker-and-change/

John is a hacker, he always believed,"Knowledge can change the destiny".

He is ready to invade a supermarket checkout system. say concretely, his goal is the supermarket cash receipts and payments software.

The basic function of the software is:

Accept three parameters:

```name```, a string, customer name

```items```, an array, the price list of all the goods purchased by the customer. All elements in the array are numbers, up to two decimal places.

```payment```, a number, cash paid by customer

return a number, the change returned to customer, up to two decimal places. When the cash paid by the customer is insufficient, the return is negative.

John added a rule based on this:

When the customer name is "John"

If the result >0, the decimal portion is doubled.

for example:

```
change("John",[1.1,2.2,3.3],10)
John bought three pieces of goods,
the total value is 1.1+2.2+3.3=6.6, payment is 10
The cashier should give John the change 3.4
But due to a "small fault", the change became 3+0.4*2=3.8
```
If the result <=0, return 0.

for example:
```
change("John",[11],10)
John bought one good=11, payment is 10, result=-1
It means John needs to give the cashier 1
But due to a "small fault", the change became 0
John doesn't need to pay the cashier
```
So John can save a lot of money, God bless the police will not catch him ;-)
*/
function change(name,items,payment){
  var sum=0;
  for (var i=0;i<items.length;i++)
    {
      sum+=items[i];
    }

  var ch=Number((payment-sum).toFixed(2));
  var ch_int=Number(Math.floor(payment-sum));
  if (name!="John")
    return ch;
  else
    {
      if (ch<=0)
        return 0;
      else
        {
         ch=(ch-ch_int)*2+ch_int;
         return +ch.toFixed(2);
        }
    }

}
