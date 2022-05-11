function isAllUpperCase(str) {
  if (str.length == 0) {
    return false;
  }
  let isAllUpperCase = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i].toUpperCase()) {
      isAllUpperCase = false;
    }
  }
  return isAllUpperCase;
}

console.log(isAllUpperCase("ABCD"));
console.log(isAllUpperCase(""));
console.log(isAllUpperCase("ABCDEFGHIJKLm"));
