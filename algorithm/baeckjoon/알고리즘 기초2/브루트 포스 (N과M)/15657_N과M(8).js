const inputs = `3 1
4 5 2`
  .toString()
  .trim()
  .split("\n");

const fs = require("fs");
const inputs = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M] = inputs[0].split(" ").map(Number);
const numArr = inputs[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const answer = [];

const makeNumPair = (nowPair, leftNumArr) => {
  if (nowPair.length === M) {
    answer.push(nowPair.join(" "));
  } else {
    leftNumArr.forEach((num, index, arr) => {
      const nextPair = [...nowPair, num];
      const nextNumArr = [...arr].filter((nextNum) => nextNum >= num);

      makeNumPair(nextPair, nextNumArr);
    });
  }
};

numArr.forEach((num, i, arr) => {
  const leftNumArr = [...arr].filter((candNum) => candNum >= num);
  makeNumPair([num], leftNumArr);
});
console.log(answer.join("\n"));
