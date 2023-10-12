const inputs = `4 4
1 1 2 2`
  .toString()
  .trim()
  .split("\n");

// const fs = require("fs");
// const inputs = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M] = inputs[0].split(" ").map(Number);
const numArr = inputs[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const set = new Set(numArr);
const uniqNumArr = [...set];
// const uniqNumArr = numArr.filter((num, index) => numArr.indexOf(num) === index);
const answer = [];

const makeNumPair = (nowPair) => {
  if (nowPair.length === M) {
    answer.push(nowPair.join(" "));
  } else {
    uniqNumArr.forEach((n) => {
      const nextPair = [...nowPair, n];
      makeNumPair(nextPair);
    });
  }
};

uniqNumArr.forEach((num) => {
  makeNumPair([num]);
});
console.log(answer.join("\n"));
