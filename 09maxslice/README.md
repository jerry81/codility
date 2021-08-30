# Max Slice 

description: find slice in array with largest sum 

## algorithms

n**3 

try every possible subset

for i in 0 to n
 for j in i to n
   for k in i to j+1
     sum += A[k]
   update max 

n**2

calculate prefix sums first and build lookup table 

n 

step thru each item sequentially and calculate max slice ending with that item and the max slice overall
each step is a binary choice between adding the previous max slice to the slice or just using the current number


overallM = 0
maxEnd = 0
for i in n
  maxend = max(a, max_ending + a)
  overallM = max(overallM, maxend) 
return maxEnd