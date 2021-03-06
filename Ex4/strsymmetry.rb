=begin
  Write a function:

def solution(s)

that, given a string S, returns the index (counting from 0) of a character such that the part of the string to the left of that character is a reversal of the part of the string to its right. The function should return −1 if no such index exists.

Note: reversing an empty string (i.e. a string whose length is zero) gives an empty string.

For example, given a string:

"racecar"

the function should return 3, because the substring to the left of the character "e" at index 3 is "rac", and the one to the right is "car".

Given a string:

"x"

the function should return 0, because both substrings are empty.

Write an efficient algorithm for the following assumptions:

the length of string S is within the range [0..2,000,000].
=end

def solution(a)
    if a.length % 2 == 0
        return -1
    end

    reversed = a.reverse
    # <=> this is spaceship notation - returns 0 if equal, -1 if l < r, 1 if l > r 
    if reversed != a
        return -1
    end

    (a.length / 2).floor
end

puts "expect 0 #{solution("x")}"

puts "expect 3 #{solution("racecar")}"

puts "expect -1 #{solution("aa")}"

puts "expect -1 #{solution("abc")}"

=begin 
result 100% 
=end