# leader

definition - an element in array len n whose value appears more than n/2 times 

## algorithms

n^2 complexity 

get count for every item
init leadercount
loop i in n
  init count
  loop j in n
    if eq A[i]
    count++
     
n log n solution 

sort - assumed to be nlogn
cleverness - by definition, leader must appear at midpoint 
loop once 
  tallying count of the midpoint item 

n solution 

premise: removing two different elements from list doesn't affect leader 
push to stack
if stack.length > 1, pop top 2 if not equal 
produces a candidate (whatever item left in stack)
finally count candidate

time taken 2n