// const inputs = `3 3
// 1231 1232 1233`
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

const answer = [];

const makeNumPair = (nowPair) => {
  if (nowPair.length === M) {
    answer.push(nowPair.join(" "));
  } else {
    numArr.forEach((num) => {
      const nextPair = [...nowPair, num];
      makeNumPair(nextPair);
    });
  }
};

numArr.forEach((num) => {
  makeNumPair([num]);
});
console.log(answer.join("\n"));
