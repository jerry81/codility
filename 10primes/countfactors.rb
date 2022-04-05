=begin
A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.

For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).

Write a function:

class Solution { public int solution(int N); }

that, given a positive integer N, returns the number of its factors.

For example, given N = 24, the function should return 8, because 24 has 8 factors, 
namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
=end

def solution(input)
    count = 0
    for i in 1..input do
        if i**2 > input
            return count
        end
        if input % i == 0
            if i**2 == input
                count += 1
            else
                count += 2
            end
        end
    end
    count 
end

puts "expect 8 : #{solution(24)}"
puts "expect 5 : #{solution(16)}"

=begin 

results:  wrong answers for 
squares
N=16, N=36✘WRONG ANSWER
got 6 expected 5
▶tiny
N <= 10✘WRONG ANSWER
got 2 expected 1
▶simple1
N=41(prime), N=42✔OK
▶simple2
N=69, N=64, N=120=5!✘WRONG ANSWER
got 8 expected 7
▶simple3
N=720=6!, N=1111✔OK
1.0.044 sOK
2.0.048 sOK
▶simple4
N=5,040=7!, N=12,345✔OK
▶simple5
N=34,879, N=40,320=8!✔OK
▶extreme_one
N=1✘WRONG ANSWER
got 2 expected 1
expand allPerformance tests
▶medium1
N=362,880=9!, N=1,948,102✔OK
▶medium2
N=3,628,800=10!, N=5,621,892, N=4,999,696✘WRONG ANSWER
got 46 expected 45
▶big1
N=27,043,111, N=39,916,800=11!, N = 39,992,976✘WRONG ANSWER
got 136 expected 135
▶big2
N=97,093,212, N=2^28✘WRONG ANSWER
got 30 expected 29
▶big3
N=479,001,600=12!, N=780291637(prime), N=449,991,369✘WRONG ANSWER
got 16 expected 15
▶extreme_maxint
N=1,000,000,000, N=MAX_INT, N=2147,395,600✘WRONG ANSWER
got 136 expected 135


results after adding the square case 
    - 100%
=end