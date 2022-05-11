// stars2(1);
// // *
// stars2(2);
// // *
// // **
// // *
// stars2(3);
// // *
// // **
// // ***
// // **
// // *
// stars2(4);
// // *
// // **
// // ***
// // ****
// // ***
// // **
// // *

function stars2(n) {
  for (let i = 0; i <= n; i++) {
    let result = "";
    for (let o = 0; o < i; o++) {
      result += "*";
    }
    console.log(result);
  }

  for (let q = n - 1; q > 0; q--) {
    let revers = "";
    for (j = 0; j < q; j++) {
      revers += "*";
    }
    console.log(revers);
  }
}

stars2(4);
