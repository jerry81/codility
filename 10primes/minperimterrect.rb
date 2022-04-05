=begin
An integer N is given, representing the area of some rectangle.

The area of a rectangle whose sides are of length A and B is A * B, and the perimeter is 2 * (A + B).

The goal is to find the minimal perimeter of any rectangle whose area equals N. 
The sides of this rectangle should be only integers.

For example, given integer N = 30, rectangles of area 30 are:

(1, 30), with a perimeter of 62,
(2, 15), with a perimeter of 34,
(3, 10), with a perimeter of 26,
(5, 6), with a perimeter of 22.
Write a function:

def solution(n)

that, given an integer N, returns the minimal perimeter of any rectangle whose area is exactly equal to N.

For example, given an integer N = 30, the function should return 22, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..1,000,000,000].
=end

def perimeter(a,b)
    return 2*(a+b)
end

def getIntSides(area)
    result = []
    for i in 1..area do
        if i**2 > area
            break
        end
        if area % i == 0
            map = {}
            map[:a] = i 
            map[:b] = area/i 
            result << map # add to array operator 
        end
    end
    result
end

def solution(area)
    sides = getIntSides(area)
    perimeters = sides.map { | item | 
        perimeter item[:a], item[:b]
    }
    return perimeters.min
end

puts "expect [{1,30}, {2,15}, {3, 10}, {5,6}] #{getIntSides(30)}"
puts "expect 22 #{solution(30)}"

=begin

results: perfect

=end 