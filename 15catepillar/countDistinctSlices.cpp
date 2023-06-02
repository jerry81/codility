#include <vector>
#include <iostream>

using namespace std;

int solution(int M, vector<int> &A) {
  vector<pair<int,int>> slices;
  vector<bool> lookup(M, false);
  int low = 0;
  int high = 0;
  while (high < A.size() && low < A.size()) {
    int next = A[high];
    if (lookup[next]) {
      // duplicate case
      // add low and high to slices, find next unique slice
      slices.push_back({low,high-1});
      while (A[low] != next) {
        lookup[low] = false;
        low++;
      }
      // one more
      lookup[low] = false;
      low++;
    } else {
      high++;
      lookup[next] = true;
    }
  }
  // check slices
  for (auto slice: slices) {
    cout << "slice is " << slice.first << " , " << slice.second << endl;
  }
  return 1;
}

int main () {
vector<int> test1 = {3,4,5,5,2};
int test1R = solution(6,test1);
return 0;
}
/*

An integer M and a non-empty array A consisting of N non-negative integers are given. All integers in array A are less than or equal to M.

A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A. The slice consists of the elements A[P], A[P + 1], ..., A[Q]. A distinct slice is a slice consisting of only unique numbers. That is, no individual number occurs more than once in the slice.

For example, consider integer M = 6 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 5
    A[3] = 5
    A[4] = 2
There are exactly nine distinct slices: (0, 0), (0, 1), (0, 2), (1, 1), (1, 2), (2, 2), (3, 3), (3, 4) and (4, 4).

The goal is to calculate the number of distinct slices.

Write a function:

int solution(int M, vector<int> &A);

that, given an integer M and a non-empty array A consisting of N integers, returns the number of distinct slices.

If the number of distinct slices is greater than 1,000,000,000, the function should return 1,000,000,000.

For example, given integer M = 6 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 5
    A[3] = 5
    A[4] = 2
the function should return 9, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
M is an integer within the range [0..100,000];
each element of array A is an integer within the range [0..M].

*/