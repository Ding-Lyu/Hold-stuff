// findAllSmall([1, 2, 3], 10); // returns [1, 2, 3]
// findAllSmall([1, 2, 3], 2); // returns [1]
// findAllSmall([1, 3, 5, 4, 2], 4); // returns [1, 3, 2]

function findAllSmall(str, n) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] < n) {
      result.push(str[i]);
    }
  }
  return result;
}

console.log(findAllSmall([1, 2, 3], 10));
