/*
A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
contains the following example triplets:

(0, 1, 2), product is −3 * 1 * 2 = −6
(1, 2, 4), product is 1 * 2 * 5 = 10
(2, 4, 5), product is 2 * 5 * 6 = 60
Your goal is to find the maximal product of any triplet.

Write a function:

function solution(A);

that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−1,000..1,000].
*/

function solution(A) {
  const sorted = A.sort((a,b) => a-b)
  const last3 = sorted.slice(sorted.length-3)
  const prod = (accum, cur) => {
    return accum*cur
  }
  const l3P = last3.reduce(prod, 1)
  const first2 = sorted.slice(0,2)
  const first2AndLast = [...first2, sorted[sorted.length-1]]
  const f2aLP = first2AndLast.reduce(prod, 1)
  return Math.max(l3P, f2aLP)
}

console.log('expect 60', solution([-3, 1, 2, -2, 5, 6]))

console.log('expect 8', solution([1,1,1,0,0,0,8]))

console.log('expect 105', solution([ 4, 7, 3, 2, 1, -3, -5 ]))

console.log('expect 120', solution([ -4, -6, 3, 4, 5 ]))

console.log('expect 125', solution([ -5, 5, -5, 4 ]))