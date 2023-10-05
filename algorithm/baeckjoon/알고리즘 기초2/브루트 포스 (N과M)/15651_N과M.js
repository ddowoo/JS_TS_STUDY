const inputs = "4 2".toString().trim().split(" ").map(Number);

// const fs = require("fs");
// const inputs = fs
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);
const N = inputs[0];
const M = inputs[1];

const numArr = Array.from(new Array(N), (_, index) => index + 1);
const answer = [];
const checkNumCombination = (nowSum) => {
  if (nowSum.length === M) {
    answer.push(nowSum);
  } else {
    numArr.forEach((num) => {
      checkNumCombination(nowSum + num);
    });
  }
};

numArr.forEach((num) => {
  checkNumCombination(num.toString());
});

console.log(answer.map((num) => num.split("").join(" ")).join("\n"));
