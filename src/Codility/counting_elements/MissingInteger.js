//Detected time complexity: O(N) or O(N * log(N))

function solution(A = []) {
  if (A.length === 1) {
    if (A[0] === 1) return 2;
    else return 1;
  }

  if (Math.max(...A) < 0) return 1;

  let i = -1,
    f = [];

  do {
    i++;
    if (f[A[i]]) continue;
    f[A[i]] = true;
  } while (i < A.length - 1);

  f.shift();
  const index = f.findIndex(element => element === undefined);

  if (index === -1) return A.length + 1;

  return index + 1;
}

solution([1, 3, 6, 4, 1, 2]);
// console.log(solution([1, 2, 3]));
// console.log(solution([-1, -3]));

/*
This is a demo task.

Write a function:

    class Solution { public int solution(int[] A); }

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array A is an integer within the range [−1,000,000..1,000,000].
*/
