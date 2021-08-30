=begin
A string S consisting of N characters is called properly nested if:

S is empty;
S has the form "(U)" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, string "(()(())())" is properly nested but string "())" isn't.

Write a function:

def solution(s)

that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..1,000,000];
string S consists only of the characters "(" and/or ")".
=end

def solution(s)
    # write your code in Ruby 2.2
    stack = []
    if s.empty?
        return 1
    end
    s.split('').each { |c|
      if c == ')'
        if stack.empty?
          return 0
        else 
          stack.pop
        end  
      elsif c == '('
        stack.push 3
      else 
        return 0 
      end
    }

    if stack.empty?
        return 1
    else
        return 0
    end 
  end
  
sol1 = solution('(()(())())')
sol2 = solution('())')

puts "expect 1: #{sol1}"
puts "expect 0: #{sol2}"
puts "expect 1: #{solution("")}"