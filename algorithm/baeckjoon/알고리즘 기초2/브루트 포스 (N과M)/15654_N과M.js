const inputs = `4 1
100 3 2 1`
  .toString()
  .trim()
  .split("\n");
// const fs = require("fs");
// const inputs = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = Number(inputs[0].split(" ")[0]);
const M = Number(inputs[0].split(" ")[1]);

const numArr = inputs[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
  .map((v) => v.toString());

const answer = [];

const dfs = (nowSumList) => {
  if (nowSumList.length === M) {
    answer.push(nowSumList.join(" "));
  } else {
    numArr.forEach((v) => {
      if (nowSumList.includes(v) === false) {
        const nextSumList = [...nowSumList];
        nextSumList.push(v);

        dfs(nextSumList);
      }
    });
  }
};

numArr.forEach((v) => {
  dfs([v]);
});

console.log(answer.join("\n"));
