// returns 55
// return 0
// return -60

function sum(str) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sum([]));
console.log(sum([-10, -20, -30]));
