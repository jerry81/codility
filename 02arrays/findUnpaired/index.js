/*
A non-empty array A consisting of N integers is given. The array contains an odd number of elements,
 and each element of the array can be paired with another element that has the same value, 
 except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, 
returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

function solutionF1(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  while (A.length > 1) {
    const filtered = A.filter(x => x == A[0]);
    if (filtered.length == 1) {
      return filtered[0];
    }
    A = A.filter(x => A[0] != x);
  }
  return A[0];
}

function solutionF2(A) {
  let m = {};
  for (let i = 0; i < A.length; i++) {
    let cur = +A[i];
    if (m[cur] != undefined) {
      m[cur] = true;
    } else {
      m[cur] = false;
    }
  }
  const entries = Object.entries(m);
  console.log("entries is ", entries);
  for (let j = 0; j < entries.length; j++) {
    let [k, v] = entries[j];
    console.log("k is , v is ", k, v);
    if (!!!v) {
      return +k;
    }
  }
}

function solutionF3(A) {
  while (true) {
    let first = A[0];
    let curLen = A.length;
    let fil = A.filter(x => x != first);
    let newLen = fil.length;
    A = [...fil];
    let diff = curLen - newLen
    let isDiffEven = diff % 2 == 0
    if (!isDiffEven) {
        return first
    }
  }
}

function solution(A) {
    let m = {}
    for (let i = 0; i < A.length; ++i) {
        let cur = A[i]
        if (m[cur] == undefined) {
            m[cur] = 1
        } else {
            ++m[cur]
        }
    }
    const values = Object.values(m);
    const keys = Object.keys(m);
    for (let j = 0; j < values.length; ++j) {
      let v = values[j];
      if (v % 2 != 0) {
        return keys[j];
      }
    }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
/*
Compilation successful.

Example test:   [9, 3, 9, 3, 9, 7, 9] // expect 7
Output (stderr):
Invalid result type, integer expected, 'undefined' found
Perhaps you are missing a 'return'?
RUNTIME ERROR (tested program terminated with exit code 1)

Detected some errors.
*/
