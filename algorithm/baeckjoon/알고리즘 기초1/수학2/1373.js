const input = "10101111"
  .split("")
  .reverse()
  .map((num) => Number(num));

// const input = require("fs")
//   .readFileSync(0)
//   .toString()
//   .trim()
//   .split("")
//   .reverse()
//   .map((num) => Number(num));

if (input.length === 1) return console.log(input[0]);

const eight = [1, 2, 4];
let answer = "";
let temp = 0;

input.forEach((num, index) => {
  if (index % 3 === 0) {
    if (index !== 0) {
      answer = answer + temp.toString();
    }
    temp = 0;
  }
  if (num === 1) {
    temp += eight[index % 3];
  }
  if (index + 1 === input.length) {
    if (index !== 0) {
      answer = answer + temp.toString();
    }
  }
});
console.log(answer.split("").reverse().join(""));
