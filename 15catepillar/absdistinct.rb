=begin
A non-empty array A consisting of N numbers is given. The array is sorted in non-decreasing order. The absolute distinct count of this array is the number of distinct absolute values among the elements of the array.

For example, consider array A such that:

  A[0] = -5
  A[1] = -3
  A[2] = -1
  A[3] =  0
  A[4] =  3
  A[5] =  6
The absolute distinct count of this array is 5, because there are 5 distinct absolute values among the elements of this array, namely 0, 1, 3, 5 and 6.

Write a function:

def solution(a)

that, given a non-empty array A consisting of N numbers, returns absolute distinct count of array A.

For example, given array A such that:

  A[0] = -5
  A[1] = -3
  A[2] = -1
  A[3] =  0
  A[4] =  3
  A[5] =  6
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647];
array A is sorted in non-decreasing order.
=end 

def setup(a)
    zeroCount = 0
    a.each_with_index do | x, idx | 
        if x > 0 || idx == a.length-1
            return { :zeros=>zeroCount, :idx=>idx }
        end
        if x == 0
            zeroCount+=1
        end
    end
end

def solution(a)
    # naive - 2 nested loops but this is quadratic 
    # applying caterpillar?
    # step until reach 0 or positive number
    # now we have two caterpillars
    total = 0
    starting = setup(a)
    zeroCount = starting[:zeros]
    idx = starting[:idx]
    if idx == a.length-1 || idx == 0
        return a.length 
    end
    if zeroCount > 0
        total += 1
    end
    b2 = idx
    f1 = idx - zeroCount - 1
    # handle two edge cases, empty 
    while f1 >= 0 && b2 < a.length
        l = a[f1].abs
        r = a[b2]
        if l == r
            total += 1
            f1-=1
            b2+=1
        end
        if l < r
            f1-=1
            total += 1
        end
        if r > l 
            b2+=1
            total += 1
        end
    end
    # now that the array has been "split" to [-5,-3,-1] and [3,6]
    # loop
    # starting from items closest to zero (-1, 3)
    # if 1 == 3
    # total += 1, move both pointers
    # if 1 < 3
    # move the negative pointer back, total += 1
    # else
    # move the positive pointer forward, total +=1
    # stop when either pointer exceeds the limit 
    total 
end

puts "expect 5 #{solution([-5,-3,-1,0,3,6])}"
puts "edge case, expect 3 #{solution([-5,-3,-1])}"

puts "edge case 2, expect 3 #{solution([5,13,21])}"

puts "expect 5 #{solution([-5,-3,-1,0,0,0,0,3,6])}"