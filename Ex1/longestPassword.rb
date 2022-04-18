=begin
    
You would like to set a password for a bank account. However, there are three restrictions on the format of the password:

it has to contain only alphanumerical characters (a−z, A−Z, 0−9);
there should be an even number of letters;
there should be an odd number of digits.
You are given a string S consisting of N characters. String S can be divided into words by splitting it at, and removing, the spaces. The goal is to choose the longest word that is a valid password. You can assume that if there are K spaces in string S then there are exactly K + 1 words.

For example, given "test 5 a0A pass007 ?xy1", there are five words and three of them are valid passwords: "5", "a0A" and "pass007". Thus the longest password is "pass007" and its length is 7. Note that neither "test" nor "?xy1" is a valid password, because "?" is not an alphanumerical character and "test" contains an even number of digits (zero).

Write a function:

def solution(s)

that, given a non-empty string S consisting of N characters, returns the length of the longest word from the string that is a valid password. If there is no such word, your function should return −1.

For example, given S = "test 5 a0A pass007 ?xy1", your function should return 7, as explained above.

Assume that:

N is an integer within the range [1..200];
string S consists only of printable ASCII characters and spaces.
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
=end 

def isDigit(c) 
    c =~ /\d/ ? true : false
end

def isLetter(c) 
    c =~ /[A-Za-z]/ ? true : false
end

def isValidPassword(a) 
    charArr = a.chars
    letterCount = 0
    numCount = 0
    charArr.each do | x |
      if isDigit x
        numCount += 1
      elsif isLetter x 
        letterCount += 1
      else 
        return false 
      end
    end
    numCount % 2 == 1 && letterCount % 2 == 0 
end

def solution(a)
    arr = a.split(" ")
    maxLen = -1
    arr.each do | word | 
        if isValidPassword(word)
            if maxLen < word.length 
                maxLen = word.length
            end
        end
    end
    maxLen
end


test1 = "test 5 a0A pass007 ?xy1"
puts "expect 7 #{solution(test1)}"

puts "expect true #{isDigit '3'}"

puts "expect false #{isDigit 'a'}"

puts "expect true #{isLetter 'a'}"

puts "expect false #{isLetter '3'}"

puts "expect false #{isDigit '?'}"

=begin
results:
correctness - just 60% 
no perf tests  

if there are no valid passwords we should return -1

second submission result: 100% 
=end