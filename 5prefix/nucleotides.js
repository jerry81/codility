/*
A DNA sequence can be represented as a string consisting of the 
letters A, C, G and T, which correspond to the types of successive nucleotides 
in the sequence. Each nucleotide has an impact factor, which is an integer.
 Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. 
 You are going to answer several queries of the form: What is the minimal impact factor of 
 nucleotides contained in a particular part of the given DNA sequence?

The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. 
There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. 
The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained 
in the DNA sequence between positions P[K] and Q[K] (inclusive).

For example, consider string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
The answers to these M = 3 queries are as follows:

The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 
3 and 2 respectively, so the answer is 2.
The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular
 nucleotide A whose impact factor is 1, so the answer is 1.
Write a function:

class Solution { public int[] solution(String S, int[] P, int[] Q); }

that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting 
of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

Result array should be returned as an array of integers.

For example, given the string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
the function should return the values [2, 4, 1], as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
M is an integer within the range [1..50,000];
each element of arrays P, Q is an integer within the range [0..N − 1];
P[K] ≤ Q[K], where 0 ≤ K < M;
string S consists only of upper-case English letters A, C, G, T.
*/

function solutionB(S, A, B) {
  let lookup = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  };
  let results = [];
  for (let i = 0; i < A.length; i++) {
    let start = A[i];
    let end = B[i];
    let min = 4;
    for (let j = start; j <= end; j++) {
      if (lookup[S[j]] < min) {
        min = lookup[S[j]];
        if (min == 1) break;
      }
    }
    results[i] = min;
  }
  return results;
  // GCC - 2,4
  // T  - 5,5
  // CAGCCTA  - 0,6  - 0,1 || 2,4 || 5,5 || 6
}

function solutionB2(S, A, B) {
  let lookup = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  };
  //
  let results = [];
  let memo = {};
  for (let i = 0; i < A.length; ++i) {
    let start = A[i];
    let end = B[i];
    let min = 4;
    let mkeys = Object.keys(memo);
    let mvals = Object.values(memo);
    inner: for (let j = start; j <= end; ++j) {
      // is j cached?
      for (let k = 0; k < mkeys.length; ++k) {
        console.log("mkeys is ", mkeys[k]);
        console.log("j is ", j);
        if (+mkeys[k] == j) {
          // find the maximum  that is < end
          console.log("mVals is ", mvals);
          console.log("k is ", k);
          let ends = mvals[k];
          console.log("ends is ", ends);
          let eKeys = Object.keys(ends);
          let eVals = Object.values(ends);
          let max = -1;
          let maxV = -1;
          for (let l = 0; l < eKeys.length; ++l) {
            let eKey = eKeys[l];
            if (+eKey < end && eKey > max) {
              max = l;
              maxV = +eKey;
            }
          }
          if (max > -1) {
            console.log("memo used");
            console.log("max is ", max);
            console.log("eVals is ", eVals);
            min = eVals[max];
            j = maxV;
            continue inner;
          }
        }
      }
      if (lookup[S[j]] < min) {
        min = lookup[S[j]];
        if (min == 1) break;
      }
    }
    results[i] = min;
    if (end - start < 2) continue;
    if (!memo[start]) {
      memo[start] = {};
    }
    memo[start][end] = min;
  }
  console.log("memo is ", memo);
  return results;
  // GCC - 2,4
  // T  - 5,5
  // CAGCCTA  - 0,6  - 0,1 || 2,4 || 5,5 || 6
}

function solution(S, A, B) {
  let memo = {
    A: [],
    C: [],
    G: []
  };
  // create lookups for each letter
  for (let i = 0; i < S.length; ++i) {
    let char = S[i];
    switch (char) {
      case "A": {
        memo.A.push(i);
        break;
      }
      case "C": {
        memo.C.push(i);
        break;
      }
      case "G": {
        memo.G.push(i);
        break;
      }
    }
  }
  let results = [];
  inner: for (let j = 0; j < A.length; ++j) {
    let start = A[j];
    let end = B[j];
    let AA = memo["A"];
    for (let k = 0; k < AA.length; ++k) {
      let curA = AA[k];
      if (curA >= start && curA <= end) {
        results.push(1);
        continue inner;
      }
    }
    let C = memo["C"];
    for (let k = 0; k < C.length; ++k) {
      let curC = C[k];
      if (curC >= start && curC <= end) {
        results.push(2);
        continue inner;
      }
    }
    let G = memo["G"];
    for (let k = 0; k < G.length; ++k) {
      let curG = G[k];
      if (curG >= start && curG <= end) {
        results.push(3);
        continue inner;
      }
    }
    results.push(4);
  }
  return results
}

console.log("sol", solution("CAGCCTA", [2, 5, 0], [4, 5, 6])); // expect 2, 4, 1
console.log("sol2", solution("GGGGGGGGGGGGGGGGGGGC", [2, 5, 0], [10, 15, 19]));

/*
    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
    */
