// makeStars(1);
// // *
// makeStars(2);
// // *\n**
// makeStars(5);
// // *\n**\n***\n****\n*****

//use this function for other prigramming languages. ex JAVA

function makeStars(n) {
  let result = "*";

  for (let i = 2; i <= n; i++) {
    let s = "\n";
    for (let o = 0; o < i; o++) {
      s += "*";
    }
    result += s;
  }
  console.log(result);
}
makeStars(1);
makeStars(2);
makeStars(5);
