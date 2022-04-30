=begin
    A positive integer N is given. The goal is to find the highest power of 2 that divides N. In other words, we have to find the maximum K for which N modulo 2^K is 0.

For example, given integer N = 24 the answer is 3, because 2^3 = 8 is the highest power of 2 that divides N.

Write a function:

def solution(n)

that, given a positive integer N, returns the highest power of 2 that divides N.

For example, given integer N = 24, the function should return 3, as explained above.

Assume that:

N is an integer within the range [1..1,000,000,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment. 
=end

def solution(n)
    sqrt = Math.sqrt(n)
    ceil = sqrt.ceil
    ceil.step(0,-1) do |item|
      cur = 2 ** item
      if n % cur == 0
        return item 
      end
    end
    0
end

puts "expect 3 #{solution(24)}"

# result 1 - 50% wrong answer for 
# failed cases below

puts "expect 0 #{solution(1)}"