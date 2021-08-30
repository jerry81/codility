/*
A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:

slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.

Write a function:

class Solution { public int solution(int[] A); }

that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].
*/

function solutionB(A) {
  let sums = [];
  for (let i = 0; i < A.length - 1; ++i) {
    sums[i] = [];
  }
  for (let j = A.length - 2; j >= 0; --j) {
    sums[j].push(A[j] + A[j + 1]);
    if (sums[j + 1]) {
      for (let k = 0; k < sums[j + 1].length; ++k) {
        sums[j].push(A[j] + sums[j + 1][k]);
      }
    }
  }
  // get min avg
  let minAvg = Number.MAX_SAFE_INTEGER;
  let minIdx = -1;
  for (let k = 0; k < sums.length; k++) {
    let cur = sums[k];
    for (let l = 0; l < cur.length; l++) {
      let avg = cur[l] / (l + 2);
      if (avg < minAvg) {
        minAvg = avg;
        minIdx = k;
      }
    }
  }
  return minIdx;
}

function solutionB2(A) {
  let sums = [];
  let minAvg = Number.MAX_SAFE_INTEGER;
  let minIdx = -1;
  for (let i = 0; i < A.length - 1; ++i) {
    sums[i] = [];
  }
  for (let j = A.length - 2; j >= 0; --j) {
    let sum = A[j] + A[j + 1];
    sums[j].push(sum);
    let avg = sum / 2;
    if (avg < minAvg) {
      minIdx = j;
      minAvg = avg;
    }
    if (sums[j + 1]) {
      for (let k = 0; k < sums[j + 1].length; ++k) {
        let sum2 = A[j] + sums[j + 1][k];
        let avg2 = sum2 / (3 + k);
        if (avg2 < minAvg) {
          minIdx = j;
          minAvg = avg2;
        }
        sums[j].push(sum2);
      }
    }
  }
  return minIdx;
  // get min avg
}


function solution(A) {
    let minIdx = -1
    let minSum = Number.MAX_SAFE_INTEGER
    let minDen = 1
    let minAvg = Number.MAX_SAFE_INTEGER
    for (let j = A.length - 2; j >= 0; --j) {
      let sum = A[j] + A[j + 1];
      let avg = sum / 2;
      // case - establish the base 

      if (minIdx < 0) {
        minAvg = avg;
        minDen = 2
        minSum = sum
        minIdx = j
        continue
      }

      // three item check

      let sum2 = A[j] + A[j + 1] + A[j+2]
      let avg2 = sum2 / 3
      let den = 2
      let tsum = sum 

      if (avg2 <= avg) {
        avg = avg2
        den = 3
        tsum = sum2    
      }

      // case, extend the minimal chain 
      let potentialSum = minSum + A[j]
      let potentialDen = minDen + 1
      let potentialAvg = potentialSum / potentialDen

      // both the chained current 2 items are larger than the min, skip to next item 
      if (avg > minAvg && potentialAvg > minAvg) {

          continue
      }

      if (potentialAvg <= avg && minIdx == (j+1)) {
        minAvg = potentialAvg;
        minDen = potentialDen
        minSum = potentialSum
        minIdx = j;
      } else if (avg <= minAvg) {
        minAvg = avg;
        minDen = den
        minSum = tsum
        minIdx = j;
      }
    }
    return minIdx;
    // get min avg
  }

  function solutionB3(A) {
    let sums = [];
    let minAvg = Number.MAX_SAFE_INTEGER
    let minIdx = -1;
    for (let i = 0; i < A.length - 1; ++i) {
      sums[i] = [];
    }
    for (let j = A.length - 2; j >= 0; --j) {
      sums[j].push(A[j] + A[j + 1]);
      let avg = (A[j] + A[j + 1]) / 2
      if (avg < minAvg) {
          minAvg = avg 
          minIdx= j
      }
      if (sums[j + 1]) {
        for (let k = 0; k < sums[j + 1].length; ++k) {
          sums[j].push(A[j] + sums[j + 1][k]);
          let avg2 = (A[j] + sums[j + 1][k]) / (3 + k)
          if (avg2 <= minAvg) {
              minAvg = avg2
              minIdx = j
          }
        }
      }
    }
    return minIdx;
  }

console.log(solution([4, 2, 2, 5, 1, 5, 8]));
console.log('test2 expect 2', solution([-3, -5, -8, -4, -10]))

console.log('test3 expect 5', solution([ 10, 10, -1, 2, 4, -1, 2, -1 ]))

console.log('test 4 expect 3', solution([ -3, -3, 10, -10, 10, -10, 10, -10, 10, -3, -3, 100, -11 ]))