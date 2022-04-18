=begin
Located on a line are N segments, numbered from 0 to N − 1, whose positions are given in arrays A and B. For each I (0 ≤ I < N) the position of segment I is from A[I] to B[I] (inclusive). The segments are sorted by their ends, which means that B[K] ≤ B[K + 1] for K such that 0 ≤ K < N − 1.

Two segments I and J, such that I ≠ J, are overlapping if they share at least one common point. In other words, A[I] ≤ A[J] ≤ B[I] or A[J] ≤ A[I] ≤ B[J].

We say that the set of segments is non-overlapping if it contains no two overlapping segments. The goal is to find the size of a non-overlapping set containing the maximal number of segments.

For example, consider arrays A, B such that:

    A[0] = 1    B[0] = 5
    A[1] = 3    B[1] = 6
    A[2] = 7    B[2] = 8
    A[3] = 9    B[3] = 9
    A[4] = 9    B[4] = 10
The segments are shown in the figure below.



The size of a non-overlapping set containing a maximal number of segments is 3. For example, possible sets are {0, 2, 3}, {0, 2, 4}, {1, 2, 3} or {1, 2, 4}. There is no non-overlapping set with four segments.

Write a function:

def solution(a, b)

that, given two arrays A and B consisting of N integers, returns the size of a non-overlapping set containing a maximal number of segments.

For example, given arrays A, B shown above, the function should return 3, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..30,000];
each element of arrays A and B is an integer within the range [0..1,000,000,000];
A[I] ≤ B[I], for each I (0 ≤ I < N);
B[K] ≤ B[K + 1], for each K (0 ≤ K < N − 1).
=end

def overlap(a1,a2,b1,b2) # where a1 < b1 and a2 < b2 and a1 < a2
    return b1 > a2 
end

$positionMap = {}

# hash lesson
# accessing non-existent key gives nil 

def overlapFast(a,b)
    return $positionMap[a] != nil || $positionMap[b] != nil
end

def updatePositionMap(a,b)
    for x in a..b
      $positionMap[x]=true
    end
end

$distArr = []

def solution(a,b)
    # greedy algorithm
    # grab smallest segments
    # sort array of smallest segments
    # maintain map of covered squares 
    # pop the smallest segment stack and add if not overlapping 
    for x in 0..a.length-1
       ax = a[x]
       bx = b[x]
       len = bx-ax
       $distArr << { :idx => x, :len => len }
    end
    count = 0
    sorted = $distArr.sort_by { |x| x[:len] }
    sorted.each do | item | 
        itema = a[item[:idx]]
        itemb = b[item[:idx]]
        if overlapFast(itema, itemb)
            next
        end
        count += 1
        updatePositionMap(itema, itemb)
    end
    count 
end

testa = [1,3,7,9,9]
testb = [5,6,8,9,10]
testSort = [{:len => 5, :idx => 0 }, {:idx => 1, :len => 2}, {:idx => 2, :len => 3}]
puts "test sort #{testSort.sort_by { |x| x[:len] }}"
puts "expect empty positionMap #{$positionMap}"
puts "expect false #{overlapFast(1,2)}"
updatePositionMap(0,5)
$positionMap = {}
puts "expect 5 items in pm #{$positionMap}"
puts "expect true #{overlapFast(1,2)}"
puts "expect 3 #{solution(testa, testb)}"
puts "expect true #{overlap(testa[0], testa[1], testb[0], testb[1])}"
puts "expect false #{overlap(testa[0], testa[2], testb[0], testb[2])}"