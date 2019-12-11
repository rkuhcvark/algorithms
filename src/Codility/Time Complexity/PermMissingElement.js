function solution(A = []) {
  if (A.length === 0) return 1;

  const sum = A.reduce((acc, value) => {
    return acc + value;
  });

  let sum1 = 0;

  for (let i = 1; i <= A.length + 1; i++) {
    sum1 += i;
  }

  return sum1 - sum;
}

console.log(solution());
