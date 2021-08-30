=begin 
A non-empty array A consisting of N integers is given.

The leader of this array is the value that occurs in more than half of the elements of A.

An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

For example, given array A such that:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
we can find two equi leaders:

0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
The goal is to count the number of equi leaders.

Write a function:

def solution(a)

that, given a non-empty array A consisting of N integers, returns the number of equi leaders.

For example, given:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
the function should return 2, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].
=end 

def getLeader(a)
    stack = []
    a.each{ |item|
        if stack.size > 0
            last = stack[-1]
            if last != item
                stack.pop
                next
            end 
        end
        stack.push(item)
    }
    if stack.size == 0 
        return -1
    end
    cand = stack[0]
    idx = -1
    count = 0
    a.each_with_index { |item, index|
        if item == cand
          count+=1
          idx = index
        end
      }
    return count > (a.size / 2) ? cand : -1
end

def solution(a)
    # cut the array 
    count = 0
    last = a.size - 1
    for pivot in 0..(last-1)
      firsthalf = a[0..pivot]
      lasthalf = a[pivot+1..last]
      if getLeader(firsthalf) == getLeader(lasthalf)
        count +=1
      end
    end
    return count
end 

puts "expect 2 #{solution([4,3,4,4,4,2])}"