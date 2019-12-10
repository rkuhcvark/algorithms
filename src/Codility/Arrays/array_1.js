// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  var counts = {};
  for (var i = 0, l = A.length; i < l; i++) {
    console.log('AI', A[i]);
    counts[A[i]] = (counts[A[i]] || 0) + 1;
  }

  console.log(counts);

  var result = A.filter(function(item) {
    return counts[item] <= 1;
  });

  console.log(result);
}

let arr = [9, 3, 9, 3, 9, 7, 9];
solution(arr);
