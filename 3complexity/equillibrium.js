/*
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

class Solution { public int solution(int[] A); }

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
*/
function solutionGrave(A) {
  const splitPoints = A.length - 1;
  let curPt = Math.floor(splitPoints / 2);
  let first = A.slice(0, curPt);
  if (first.length == 0) {
    ++curPt;
    first = A.slice(0, curPt);
  }
  let second = A.slice(curPt, A.length);
  if (second.length == 0) {
    --curPt;
    first = A.slice(0, curPt);
    second = A.slice(curPt, A.length);
  }
  let fs = sum(first);
  let ss = sum(second);
  while (true) {
    let diff = Math.abs(fs - ss);
    let lastOfFirst = first[first.length - 1];
    let prevFS = fs - lastOfFirst;
    let prevSS = ss + lastOfFirst;
    let pdiff = Math.abs(prevFS - prevSS);
    let firstOfSecond = second[0];
    let nextFS = fs + firstOfSecond;
    let nextSS = ss - firstOfSecond;
    let ndiff = Math.abs(nextFS - nextSS);
    if (pdiff < diff && first.length > 1) {
      // move left
      second.unshift(first.pop());
      fs = prevFS;
      ss = prevSS;
    } else if (ndiff < diff && second.length > 1) {
      // move right
      first.push(second.shift());
      fs = nextFS;
      ss = nextSS;
    } else {
      // diff is the min
      return diff;
    }
  }
}

function solution(A) {
    // because numbers are both positive and negative, every number must be checked
    let front = A.slice(0, 1)
    let back = A.slice(1, A.length)
    let sumF = sum(front)
    let sumB = sum(back)
    let minDiff = Math.abs(sumF - sumB)
    for (let i = 0; i < back.length - 1; i++) {
        sumF+=back[i]
        sumB-=back[i]
        let diff = Math.abs(sumF - sumB)
        if (diff < minDiff) {
            minDiff = diff
        }
    }
    return minDiff
}

function sum(A) {
  return A.reduce((accum, cur) => {
    return accum + cur;
  }, 0);
}

console.log("sum test ", sum([3, 1, 2, 4, 3]));

console.log("sol ", solution([-1000, 1000]));
console.log('sol2 ', solution([3, 1, 2, 4, 3]))
/*
Example test:   [3, 1, 2, 4, 3]
Output (stderr):
Invalid result type, integer expected, 'undefined' found
Perhaps you are missing a 'return'?
RUNTIME ERROR (tested program terminated with exit code 1)
*/
