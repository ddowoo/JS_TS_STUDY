const inputs = `4 2`
  .toString()
  .trim()
  .split(" ")
  .map((n) => Number(n));
// const fs = require("fs");
// const input = fs
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((n) => Number(n));

const N = inputs[0];
const M = inputs[1];

const nums = [];
for (let i = 1; i <= N; i++) {
  nums.push(i.toString());
}

const answer = [];

let count = 0;

const dfs = (sum, list) => {
  if (sum.length === M) {
    answer.push(Number(sum));
  } else if (sum.length < M) {
    list.forEach((num) => {
      const _list = list.filter((n) => n !== num);
      dfs(sum + num, _list);
    });
  }
};

nums.forEach((num) => {
  const _list = nums.filter((n) => n !== num);
  dfs(num, _list);
});

answer.forEach((num) => {
  console.log(num.toString().split("").join(" ").trim());
});
