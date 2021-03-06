=begin
Two positive integers N and M are given. Integer N represents the number of chocolates arranged in a circle, numbered from 0 to N − 1.

You start to eat the chocolates. After eating a chocolate you leave only a wrapper.

You begin with eating chocolate number 0. Then you omit the next M − 1 chocolates or wrappers on the circle, and eat the following one.

More precisely, if you ate chocolate number X, then you will next eat the chocolate with number (X + M) modulo N (remainder of division).

You stop eating when you encounter an empty wrapper.

For example, given integers N = 10 and M = 4. You will eat the following chocolates: 0, 4, 8, 2, 6.

The goal is to count the number of chocolates that you will eat, following the above rules.

Write a function:

def solution(n, m)

that, given two positive integers N and M, returns the number of chocolates that you will eat.

For example, given integers N = 10 and M = 4. the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N and M are integers within the range [1..1,000,000,000].

10 chocolates
stop when encounter repeat

=end

def eatRecursive(arr, cur, step, len) # array is current array, if a -1 is encountered, stop
    # end case
    if arr[cur] == -1
        return 0
    else
        arr[cur] = -1
        cur = (cur + step) % len
        return 1 + eatRecursive(arr, cur, step, len)
    end
end

def solution(n, m)
    chocolates = [] 
    for x in 0..n-1
        chocolates << x
    end
    eatRecursive(chocolates, 0, m, n)
end
  
puts "expect 5 #{solution(10,4)}"

# results
# correctness 100%
# performance 0% - 3 timeouts, one stack overflow 
# complexity detected as O(N+M)