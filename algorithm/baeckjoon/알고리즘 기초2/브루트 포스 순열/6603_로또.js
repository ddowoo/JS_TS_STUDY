// const fs = require("fs");
// const inputs = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const inputs = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`
  .toString()
  .trim()
  .split("\n");
const answer = [];

inputs.forEach((nums) => {
  const input = nums.toString().split(" ");
  const k = input.shift();
  const S = input;

  const tempAnswer = [];
  const makeLotto = (leftNum) => {
    if (leftNum.length === 6) {
      if (tempAnswer.indexOf(leftNum.join(" ")) === -1) {
        tempAnswer.push(leftNum.join(" "));
      }
    } else {
      leftNum.forEach((num) => {
        const _leftNum = leftNum.slice();
        const index = _leftNum.indexOf(num);
        _leftNum.splice(index, 1);
        makeLotto(_leftNum);
      });
    }
  };

  makeLotto(S);
  if (nums !== "0") {
    answer.push(tempAnswer.reverse());
  }
});

let ans = "";

answer.forEach((numList) => {
  ans += numList.join("\n");
  ans += "\n\n";
});

console.log(ans.trim());
