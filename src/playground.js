function solution(N) {
  const binary = N.toString(2).split('');

  let gaps = [];
  let gap = 0;

  binary.forEach(value => {
    if (value == 1) {
      gaps.push(gap);
      gap = 0;
    }

    if (value == 0) {
      return gap++;
    }
  });

  return Math.max.apply(Math, gaps);
}

solution(529);
