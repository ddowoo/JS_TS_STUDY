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

const answer = [];

const makeNumPair = (nowPair, leftNumArr) => {
  if (nowPair.length === M) {
    answer.includes(nowPair.join(" ")) === false && answer.push(nowPair.join(" "));
  } else {
    leftNumArr.forEach((num, index, arr) => {
      const nextPair = [...nowPair, num];
      const nextNumArr = [...arr].filter((candNum, candIndex) => index !== candIndex && candNum >= num);

      makeNumPair(nextPair, nextNumArr);
    });
  }
};

numArr.forEach((num, i, arr) => {
  const leftNumArr = [...arr].filter((candNum, candI) => i !== candI && candNum >= num);
  makeNumPair([num], leftNumArr);
});
console.log(answer.join("\n"));
