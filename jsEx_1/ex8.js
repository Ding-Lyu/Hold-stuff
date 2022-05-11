// ; // returns 3
// findSmallerTotal([1, 2, 3], 1); // returns 0
//  // returns 25
// findSmallerTotal([3, 2, 5, 8, 7], 0); // returns 0

function findSmallerTotal(str, n) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] < n) {
      counter += str[i];
    }
  }
  return counter;
}

console.log(findSmallerTotal([3, 2, 5, 8, 7], 999));
console.log(findSmallerTotal([1, 2, 3], 3));
