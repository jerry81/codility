/*

Two positive integers N and M are given. Integer N represents the number of
chocolates arranged in a circle, numbered from 0 to N − 1.

You start to eat the chocolates. After eating a chocolate you leave only a
wrapper.

You begin with eating chocolate number 0. Then you omit the next M − 1
chocolates or wrappers on the circle, and eat the following one.

More precisely, if you ate chocolate number X, then you will next eat the
chocolate with number (X + M) modulo N (remainder of division).

You stop eating when you encounter an empty wrapper.

For example, given integers N = 10 and M = 4. You will eat the following
chocolates: 0, 4, 8, 2, 6.

The goal is to count the number of chocolates that you will eat, following the
above rules.

Write a function:

int solution(int N, int M);

that, given two positive integers N and M, returns the number of chocolates that
you will eat.

For example, given integers N = 10 and M = 4. the function should return 5, as
explained above.

Write an efficient algorithm for the following assumptions:

N and M are integers within the range [1..1,000,000,000].

*/

#include <iostream>
#include <vector>
using namespace std;

int solution(int N, int M) {
  if (N == 0) return 0;

  int cur = 0;
  bool start = false;
  int iterations = 0;
  int count = 1;
  int period = N / M;
  int interval = period * M;
  while (iterations < 200) {
    iterations++;
    if ((cur == 0 || cur == N) && start) {
      return count;
    }
    start = true;

    count += period;
    cur += interval;

    if (cur < N) cur += M;

    if (cur >= N) {
      cur = cur % N;
    }
    iterations++;
  }

  return count;
}

int main() {
  cout << "expect 5 " << endl << solution(10, 4) << endl;
  cout << "expect 4 " << endl << solution(24, 18) << endl;
  return 0;
}

// start with 1 (0th candy)
// count intervals from start to N
// N-start/interval - add this if start has not been reached before
// get next start
// interval - (n-start)%interval

// new plan
// count how many intervals
// we will increment by this many choclates each time
// when we increment over N, reset the pointer.
// stop when the pointer is back to the start (or N)