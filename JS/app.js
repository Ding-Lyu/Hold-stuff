// let answer = Math.floor(Math.random() * 100);
// console.log(answer);

// let n1 = 0;
// let n2 = 99;

// while (true) {
//   let guess = prompt("Make your guess: " + n1 + " and " + n2);

//   if (guess < n1 || guess > n2) {
//     alert("Please input a valid number.");
//     continue;
//   }

//   if (guess == answer) {
//     alert("The secret number is: " + answer + ".");
//     alert("You win the game!");
//     break;
//   } else if (guess <= answer) {
//     n1 = guess;
//   } else if (guess >= answer) {
//     n2 = guess;
//   }
// }
// let secondH1 = document.querySelectorAll(".second");

// console.log(secondH1);

// let luckyNumber = [1, 4, 6, 7, 5, 26, 745, 6425, 645];

// luckyNumber.forEach(function checkNumber(num) {
//   if (num > 5) {
//     console.log(num);
//   }
// });

// luckyNumber.forEach((num) => {
//   if (num > 200) {
//     console.log(num);
//   }
// });

// let body = document.querySelector("body");
// let myh1 = document.createElement("h1");
// myh1.innerText = "Hi i am Ding";

// body.appendChild(myh1);

let h1 = document.querySelector("h1");
h1.addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
});
