const inputs = `1
)`.split("\n");
// const inputs = require("fs").readFileSync(0).toString().split("\n");
inputs.shift();
const LEFT = "(";
let answer = [];

inputs.forEach((input) => {
  let leftNum = 0;
  let rightNum = 0;
  const strArr = input.split("");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] === LEFT ? leftNum++ : rightNum++;
    if (rightNum > leftNum) break;
  }
  answer.push(leftNum === rightNum ? "YES" : "NO");
});

console.log(answer.join("\n"));
