// //1. Write a function called "isUpperCase" that checks if the first letter of the string is uppercase.

// function isUpperCase(str) {
//   if (str[0] == str[0].toUpperCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isUpperCase(str) {
  if (str.length == 0) {
    return false;
  }
  //   if (str[0] == str[0].toUpperCase()) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //可以直接返回一个值，从而取代一整个if，因为当==写出后，下面的句子会直接做一个Boolean的判断，无论如何都会返回一个值。
  return str[0] == str[0].toUpperCase();
}

console.log(isUpperCase("ABCD"));
console.log(isUpperCase(""));
console.log(isUpperCase("aBCD"));
// returns true
// returns false
// returns false
