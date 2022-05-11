//Write a function called "printEvery3" that prints out integers 1, 4, 7, 10, ..., 88.

function printEvery3() {
  for (let i = 1; i <= 88; i += 3) {
    console.log(i);
  }
}

function printEvery3() {
  let i = 1;
  while (i <= 88) {
    console.log(i);
    i += 3;
  }
}

printEvery3();
