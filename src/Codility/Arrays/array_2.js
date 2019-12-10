function solution(A, K) {
  let i = 0;
  while (i < K) {
    A.unshift(A.pop());
    K--;
  }
  console.log(A);
  return A;
}

solution([1, 2, 3, 4], 4);

/**
 * 
*         add  remove  start  end
   push    X                   X
    pop           X            X
unshift    X             X
  shift           X      X
 */
