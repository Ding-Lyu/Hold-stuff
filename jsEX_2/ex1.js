// *
// *
// **
// ***
// ****

function stars(n) {
  for (let i = 0; i <= n; i++) {
    let result = "";
    for (let o = 0; o < i; o++) {
      result += "*";
    }
    console.log(result);
  }
}
stars(4);
stars(1);
