=begin
 A non-empty array A consisting of N integers is given. The first covering prefix of array A is the smallest integer P such that 0≤P<N and such that every value that occurs in array A also occurs in sequence A[0], A[1], ..., A[P].

For example, the first covering prefix of the following 5−element array A:

  A[0] = 2
  A[1] = 2
  A[2] = 1
  A[3] = 0
  A[4] = 1
is 3, because sequence [ A[0], A[1], A[2], A[3] ] equal to [2, 2, 1, 0], contains all values that occur in array A.

Write a function

def solution(a)

that, given a non-empty array A consisting of N integers, returns the first covering prefix of A.

For example, given array A such that

  A[0] = 2
  A[1] = 2
  A[2] = 1
  A[3] = 0
  A[4] = 1
the function should return 3, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..1,000,000];
each element of array A is an integer within the range [0..N-1].   
=end

def solution(a) 
    # build range map and count
    rangeMap = {}
    count = 0
    a.each do |x|
        if !rangeMap[x]
            rangeMap[x] = true
            count += 1
        end
    end
    for i in 0..a.length do
        item = a[i]
        puts "item is #{item}"
        if rangeMap[item]
            rangeMap[item] = false
            count -= 1
        end
        if count == 0 
            return i
        end
    end
    a.length - 1
end

puts "expect 3 #{solution([2,2,1,0,1])}"

# result 100%