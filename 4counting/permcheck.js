/*
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
*/

/*
Compilation successful.

Example test:   [4, 1, 3, 2]
Output (stderr):
Invalid result type, integer expected, 'undefined' found
Perhaps you are missing a 'return'?
RUNTIME ERROR (tested program terminated with exit code 1)

Example test:   [4, 1, 3]
Output (stderr):
Invalid result type, integer expected, 'undefined' found
Perhaps you are missing a 'return'?
RUNTIME ERROR (tested program terminated with exit code 1)

Detected some errors.
*/

function max(A) {
    return A.reduce((a,c) => {
      if (c > a) return c
      else {
          return a
      }
    }, 0)
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const m = max(A)
    let counted = []
    if (m != A.length) { 
        return 0
    }
    for (let i = 0; i < m; i++) {
      counted[i] = 0
    }
    for (let j = 0; j < A.length; ++j) {
        if (counted[A[j]-1] != 0) {
            return 0
        } else {
            ++counted[A[j]-1]
        }
    }
    return 1
}

console.log('max test ', max([4,1,3]))
console.log('sol 1', solution([4, 1, 3, 2]))
console.log('sol 2 is ', solution([4,1,3]))