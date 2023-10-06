const inputs = "4 2".toString().trim().split(" ");
// const fs = require("fs");
// const inputs = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map(Number);
const N = inputs[0];
const M = inputs[1];

const numArr = Array.from(new Array(N), (v, i) => i + 1);

const answers = [];
const dfs = (nowSum, leftNumArr, lastNum) => {
  if (nowSum.length === M) {
    answers.push(nowSum);
  } else {
    leftNumArr.forEach((n, i, arr) => {
      if (n >= lastNum) {
        const nextSum = `${nowSum}${n}`;
        const nextLeftNumArr = arr.filter((leftNum) => leftNum >= lastNum);
        const nextLastNum = n;
        dfs(nextSum, nextLeftNumArr, nextLastNum);
      }
    });
  }
};

numArr.forEach((num) => {
  const nextSum = num.toString();
  const nextLeftNumArr = numArr.filter((n) => n >= num);
  const nextLastNum = num;

  return dfs(nextSum, nextLeftNumArr, nextLastNum);
});

console.log(answers.map((v) => v.split("").join(" ")).join("\n"));
