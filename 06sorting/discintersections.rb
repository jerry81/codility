=begin

We draw N discs on a plane. The discs are numbered from 0 to N − 1. An array A of N non-negative integers, specifying the radiuses of the discs, is given. The J-th disc is drawn with its center at (J, 0) and radius A[J].

We say that the J-th disc and K-th disc intersect if J ≠ K and the J-th and K-th discs have at least one common point (assuming that the discs contain their borders).

The figure below shows discs drawn for N = 6 and A as follows:

  A[0] = 1
  A[1] = 5
  A[2] = 2
  A[3] = 1
  A[4] = 4
  A[5] = 0


There are eleven (unordered) pairs of discs that intersect, namely:

discs 1 and 4 intersect, and both intersect with all the other discs;
disc 2 also intersects with discs 0 and 3.
Write a function:

function solution(A);

that, given an array A describing N discs as explained above, returns the number of (unordered) pairs of intersecting discs. The function should return −1 if the number of intersecting pairs exceeds 10,000,000.

Given array A shown above, the function should return 11, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [0..2,147,483,647].

=end

def solution(a)
  memo = [];
  count = 0;
  a.each_with_index do | item, index |
    puts "item is #{item} index is #{index}"
    min = {}
    max = {}
    # build a map of each "circle"'s max and min
    memo[index] = { min: index - item, max: index + item}
  end
  puts "memo is #{memo}"
  # go thru each item 
  # condition for "intersecting"
  # either endpoint is between the min and max of another
  for x in 0..memo.length-2 do 
    for y in x+1..memo.length-1 do 
        bounds1 = memo[x]
        bounds2 = memo[y]
        firstMinInSecond = bounds1[:min] >= bounds2[:min] && bounds1[:min] <= bounds2[:max]  
        firstMaxInSecond = bounds1[:max] >= bounds2[:min] && bounds1[:max] <= bounds2[:max] 
        secondMinInFirst = bounds2[:min] >= bounds1[:min] && bounds2[:min] <= bounds1[:max]
        secondMaxInFirst = bounds2[:max] >= bounds1[:min] && bounds2[:max] <= bounds1[:max]
        firstInSecond = firstMinInSecond || firstMaxInSecond
        secondInFirst = secondMinInFirst || secondMaxInFirst
        if x==0 && y==2
            puts "1 in 2 #{firstInSecond}"
            puts "2 in 1 #{secondInFirst}"
            # first in second is wrong
            puts "firstMinInSEcond2nd #{bounds1[:min]} is less than or equal to #{bounds2[:max]} result #{bounds1[:min] <= bounds2[:max]}"
            puts "firstMinInSecond1st #{bounds1[:min]} is gte #{bounds2[:min]} result #{bounds1[:min] >= bounds2[:min]}"
        end
        puts "comparing #{x} and #{y}"
        puts "result is #{firstInSecond || secondInFirst}"
        if firstInSecond || secondInFirst
            count += 1
        end 
    end
  end
  count
end

puts "expect 11 - answer #{solution([1, 5, 2, 1, 4, 0])} ";

# lesson learned and and && behave differently - forums don't recommend using the word version 

# result:
# 50% timeout errors,  O(n^2)