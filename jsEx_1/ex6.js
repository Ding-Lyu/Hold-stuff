function position(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      return str[i] + " " + i;
    }
  }
  return -1;
}

console.log(position("abcd"));
console.log(position("AbcD"));
console.log(position("abCD"));
// prints -1
// prints A 0
// prints C 2
