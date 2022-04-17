=begin

An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if it is possible to build a triangle with sides of lengths A[P], A[Q] and A[R]. In other words, triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 12
There are four triangular triplets that can be constructed from elements of this array, namely (0, 2, 4), (0, 2, 5), (0, 4, 5), and (2, 4, 5).

Write a function:

def solution(a)

that, given an array A consisting of N integers, returns the number of triangular triplets in this array.

For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 12
the function should return 4, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..1,000];
each element of array A is an integer within the range [1..1,000,000,000].

=end

def isTriangular(a,b,c)
#     A[P] + A[Q] > A[R],
# A[Q] + A[R] > A[P],
# A[R] + A[P] > A[Q].
  case1 = (a + b) > c
  case2 = (b + c) > a 
  case3 = (c + a) > b 
  return case1 && case2 && case3
end

def solution(a)
  # naive solution try every single permutation 
  # 0,1,2
  # 0,2,3
  # 0,3,4
  x=0
  y=1
  z=2 
  for i in x..a.length - 3 do
    for j in y..a.length - 2 do 
        for k in z..a.length - 1 do 
        end
    end
end
puts "syntax ok"
end

puts "expect 4 #{solution([10, 2, 5, 1, 8, 12])}"

puts "expect true #{isTriangular(10,5,8)}"
puts "expect false #{isTriangular(10,2,5)}"