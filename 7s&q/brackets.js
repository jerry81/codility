/*
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings. e.g. []()
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

class Solution { public int solution(String S); }

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
*/

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (S.length == 0) return 1;
  let s = [];
  for (let i in S) {
    let char = S[i];
    if (["(", "[", "{"].includes(char)) {
      s.push(char);
    } else {
      if (s.length == 0) return 0;
      const popped = s.pop();

      if (char == ')') {
        if (popped != '(') return 0;
      }
      if (char == '}') {
        if (popped != '{') return 0;
      }
      if (char == ']') {
        if (popped != '[') return 0;
      }
    }
  }
  return s.length == 0 ? 1 : 0
}

console.log("expect 1", solution("{[()()]}"));
console.log("expect 0", solution("([)()]"));

/*
'{[()()]}'
Output (stderr):
Invalid result type, integer expected, 'undefined' found
Perhaps you are missing a 'return'?
RUNTIME ERROR (tested program terminated with exit code 1)

Example test:   '([)()]'
*/
