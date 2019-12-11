// function solution(N) {
//   const binary = N.toString(2).split('');

//   let gaps = [];
//   let gap = 0;

//   binary.forEach(value => {
//     if (value == 1) {
//       gaps.push(gap);
//       gap = 0;
//     }

//     if (value == 0) {
//       return gap++;
//     }
//   });

//   return Math.max.apply(Math, gaps);
// }

// solution(529);

var a = {},
  b = { key: 'b' },
  c = { key: 'c' },
  d = { key: 'd' };

a[b] = 123;
a[c] = 456;
a[d] = 666;

// console.log(a[b]);
