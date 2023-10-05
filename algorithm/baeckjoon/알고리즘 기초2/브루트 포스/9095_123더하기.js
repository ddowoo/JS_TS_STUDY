/**
 * 모듈러 연상 관련 학습하기
 */

const inputs = `3
4
7
10`
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));
// const fs = require("fs");
// const input = fs
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((n) => Number(n));
inputs.shift();

const answer = inputs.map((n) => {
  let answer = 0;

  const dfs = (sum) => {
    if (sum === n) {
      answer++;
    } else if (sum < n) {
      dfs(sum + 1);
      dfs(sum + 2);
      dfs(sum + 3);
    }
  };

  [1, 2, 3].forEach((num) => {
    dfs(num);
  });

  return answer;
});

console.log(answer.join("\n"));
