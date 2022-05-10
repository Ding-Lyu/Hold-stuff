function stars(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += "*";
  }
  return result;
}

console.log(stars(5));
console.log(stars(3));
console.log(stars(10));

console.log(__filename);
