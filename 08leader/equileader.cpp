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
#include <stack>
#include <iostream>

using namespace std;

int getLeader(vector<int> &V, int start, int end) {
  stack<int> stk;
  for (int i = start; i < end; ++ i) {
    int cur = V[i];
    if (stk.empty()) {
      stk.push(cur);
      continue;
    }

    if (stk.top() != cur) {
      stk.pop();
      continue;
    }

    stk.push(cur);
  }

  if (stk.empty()) return -1000000001;

  int cand = stk.top();
  int count = 0;
  for (int i = start; i < end; ++i) {
    if (V[i]==cand) count++;
  }
  return (count > ((end-start) / 2)) ? cand : -1000000001;
}

int solution(vector<int> &A) {
  int count = 0;
  for (int i = 0; i < A.size()-1; ++i) {
    int l1 = getLeader(A,0,i+1);
    int l2 = getLeader(A, i+1, A.size());
    if (l1 < -1000000000 || l2 < -1000000000) continue;
    if (getLeader(A,0,i+1) == getLeader(A,i+1, A.size())) count++;
  }
  return count;
}

int main() {
  vector<int> test = {};
 // cout << "expect " << solution(test) << endl;

  vector<int> testLeader = {4,3,4,4,4,2};
  cout << "expect 4 " << getLeader(testLeader,0,1) <<endl;
}