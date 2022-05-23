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

// let h1 = document.querySelector("h1");
// h1.addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
// });

<<<<<<< HEAD
// let a1 = ["Ding", "Concordia", "Cooper"];
// let a2 = ["Neo", "Yee", "Cado"];

// let friends = a1.concat(a2);

// console.log(friends);

// function Person(name, age) {
//   console.log(this);
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHi = function () {
//   console.log(this.name + " says Hi.");
// };

// let Ding = new Person("Ding");

// console.log(Ding + Ding.sayHi());

class Person {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  sayHi() {
    console.log(this.name + " says Hi.");
  }

  walk() {
    console.log(this.name + " is walking.");
  }
}

class Student extends Person {
  constructor(name, age, height, weight, major, grade) {
    super(name, age, height, weight);
    this.major = major;
    this.grade = grade;
  }
  study() {
    console.log(this.name + " likes study.");
  }
}

let Ding = new Student("Ding Lyu", 26, 181, 83, "CS", 6.6);
console.log(Ding);
Ding.walk();
=======
// let friend = ["Ding", "Concordia", "Cooper"];

// localStorage.setItem("friend", JSON.stringify(friend));

let getFriend = JSON.parse(localStorage.getItem("friend"));

console.log(getFriend);
>>>>>>> d87d20e367a1e8646c96552ebf20c2d4f93db993
