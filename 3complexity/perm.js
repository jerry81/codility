/* 
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

function solution(A) {
  let m = {};
  for (let i = 0; i < A.length + 2; ++i) {
    let seq = m[i+1];
    if (seq == undefined) {
      m[i+1] = false;
    }
    if (i < A.length) {
      let cur = A[i];
      m[cur] = true;
    }
  }
  const keys = Object.keys(m)
  const vals = Object.values(m)
  for (let j = 0; j < vals.length; ++j) {
      if (!!!vals[j]) return keys[j]
  }
  // write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution([2, 3, 1, 5]))
/*
Example test:   [2, 3, 1, 5]
Output (stderr):
Invalid result type, integer expected, 'undefined' found
Perhaps you are missing a 'return'?
RUNTIME ERROR (tested program terminated with exit code 1)

Detected some errors.
*/
