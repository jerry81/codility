/*


A non-empty array A consisting of N integers is given.

The leader of this array is the value that occurs in more than half of the elements of A.

An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

For example, given array A such that:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
we can find two equi leaders:

0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
The goal is to count the number of equi leaders.

Write a function:

int solution(vector<int> &A);

that, given a non-empty array A consisting of N integers, returns the number of equi leaders.

For example, given:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
the function should return 2, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].


*/

#include <vector>
#include <iostream>
#include <unordered_map>

using namespace std;

unordered_map<int, int> freq1;
unordered_map<int, int> freq2;
int buildMap(vector<int> &V) {
  int maxI = -1;
  int maxV = -1;
  for (int i: V) {
    freq1[i]++;
    if (freq1[i] > maxV) {
      maxV = freq1[i];
      maxI = i;
    }

  return (maxV > (V.size()/2)) ? maxI : INT_MIN;
  }
}



int solution(vector<int> &A) {
  int ldr = buildMap(A);

  if (ldr == INT_MIN) return 0;

  int count = 0;

  freq2[A[0]]++;
  freq1[A[0]]--;

  int leftSize = 1;
  int rightSize = A.size()-1;
  while (leftSize < A.size()) {
    bool rightLeader = freq1[ldr] > (rightSize/2);
    bool leftLeader = freq2[ldr] > (leftSize/2);
    if (rightLeader && leftLeader) count++;
  }

  return count;
}

int main() {
  vector<int> test = {};

  vector<int> testLeader = {4,3,4,4,4,2};
}

/*
current issue - timeouts on large randoms
use sliding window and makes this 2N
first pass - get freq map for 0,1 and 1 to n
then on each move just update freq map for first half and second half
but this is not good enough - b/c it is still n^2

if we sort items
then at each step it is nlogn for an pop/push
priority queue sorted by frequency

new idea:
- use the stack method with sliding window

- since this is an easy - i am assuming there is some simplification that can be assumed
- like the leader of the entire array will show up in either of the subarrays

- first get the leader using freq map
  - split into 2 freq maps
  - increase freq appropriately for the growing subarray
  - decrease freq appropriately for the shrinking subarray
  - only checking freq map - check if leader is still leader (freq[leader] / substring length)
*/