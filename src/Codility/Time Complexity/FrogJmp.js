// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  console.time('time');
  const res = [X, Y, D].every(element => element >= 1 && element <= 1000000000);

  if (!(X <= Y && res)) {
    return -1;
  }

  let count = 0;

  while (X < Y) {
    count++;
    X = X + D;
  }
  console.timeEnd('time');
  return count;
}
console.log(solution(1, 900000000, 2));
