function sum(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  return arr[0] + sum(arr.slice(1));
}

function count(arr) {
  if (arr.length == 1) {
    return 1;
  }
  return 1 + count(arr.slice(1));
}

function max(list) {
  if (list.length === 2) {
    return list[0] > list[1] ? list[0] : list[1];
  }
  let sub_max = max(list.slice(1));
  return list[0] > sub_max ? list[0] : sub_max;
}

console.log(count([1, 5, 10, 25, 16, 1])); // 25
