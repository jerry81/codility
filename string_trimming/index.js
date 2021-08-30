/* 
A string S containing only the letters "A", "B" and "C" is given. The string can be transformed by removing one occurrence of "AA", "BB" or "CC".

Transformation of the string is the process of removing letters from it, based on the rules described above. As long as at least one rule can be applied, the process should be repeated. If more than one rule can be used, any one of them could be chosen.

Write a function:

class Solution { public String solution(String S); }

that, given a string S consisting of N characters, returns any string that can result from a sequence of transformations as described above.

For example, given string S = "ACCAABBC" the function may return "AC", because one of the possible sequences of transformations is as follows:



Also, given string S = "ABCBBCBA" the function may return "", because one possible sequence of transformations is:



Finally, for string S = "BABABA" the function must return "BABABA", because no rules can be applied to string S.

Write an efficient algorithm for the following assumptions:

the length of S is within the range [0..50,000];
string S consists only of the following characters: "A", "B" and/or "C".
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

function isEvenPalindrome(S) {
    if (S.length % 2 != 0) return false
    const midpoint = S.length / 2
    const front = S.slice(0, midpoint)
    const back = S.slice(midpoint, S.length)
    const backR = reverse(back)
    return backR == front
}

function reverse(S) {
    const arr = S.split('')
    let reversed = ''
    for (let i = 0; i < S.length; i++) {
      reversed = reversed.concat(arr[arr.length-i-1])
    }
    return reversed
}

function solution(S) {
  if (isEvenPalindrome(S)) {
      return ''
  }
  // write your code in JavaScript (Node.js 8.9.4)
  do {
    let splitOnce = S.split("AA");
    let joined = splitOnce.join("");
    let splitTwice = joined.split("BB");
    let joined2 = splitTwice.join("");
    let splitThrice = joined2.split("CC");
    let joined3 = splitThrice.join("");
    if (joined3 == S) return joined3;
    S = joined3;
  } while (true);
}

/* tests
Example test:   'ABCBBCBA'
Output (stderr):
Invalid result type, string expected, 'undefined' found
Perhaps you are missing a 'return'?
RUNTIME ERROR (tested program terminated with exit code 1)

Example test:   'BABABA'
Output (stderr):
Invalid result type, string expected, 'undefined' found
Perhaps you are missing a 'return'?
RUNTIME ERROR (tested program terminated with exit code 1)
*/

console.log('reverse(reverse) is ', reverse('reverse'))
console.log('isEvenPalindrome(ABCCBA)', isEvenPalindrome('ABCCBA'))
console.log('isEvenPalindrome(ABCACBA)', isEvenPalindrome('ABCACBA'))
console.log('isEvenPalindrome(ABCABCCBACBA)', isEvenPalindrome('ABCABCCBACBA'))
