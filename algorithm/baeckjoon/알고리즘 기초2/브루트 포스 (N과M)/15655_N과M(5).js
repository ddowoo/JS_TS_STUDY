// const inputs = `4 4
// 1231 1232 1233 1234`
//   .toString()
//   .trim()
//   .split("\n");

const fs = require("fs");
const inputs = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M] = inputs[0].split(" ").map(Number);
const numArr = inputs[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

// console.log("N : ", N);
// console.log("M : ", M);
// console.log(numArr);

const answers = [];

const makeNumComb = (nowComb, leftNumArr) => {
  if (nowComb.length === M) {
    answers.push(nowComb);
  } else {
    leftNumArr.forEach((num) => {
      const nextComb = [...nowComb, num];
      const nextLeftNumArr = leftNumArr.filter((leftNum) => leftNum > num);
      makeNumComb(nextComb, nextLeftNumArr);
    });
  }
};

numArr.forEach((num) => {
  const nextLeftNumArr = numArr.filter((leftNum) => leftNum > num);
  makeNumComb([num], nextLeftNumArr);
});
console.log(answers.map((numArr) => numArr.join(" ")).join("\n"));
