const inputs = `8
4
3
6
8
7
5
2
1`.split("\n");
// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
inputs.shift();

let answer = "";
let stack = [];
let targetIndex = 0;
let i = 1;

while (i > 0) {
  if (i === 1) {
    stack.push(i);
    answer += "+";
    i++;
    continue;
  }

  const target = Number(inputs[targetIndex]);
  const lastNum = stack[stack.length - 1];

  if (lastNum > target) {
    answer = "NO";
    i = -1;
    continue;
  }

  if (lastNum === target) {
    stack.pop();

    targetIndex++;
    answer += "-";
    continue;
  }

  if (target >= i) {
    stack.push(i);
    answer += "+";
    i++;
    continue;
  }

  if (stack.length === 0) i = -1;
}

answer = answer === "NO" ? answer : answer.split("").join("\n");

console.log(answer);
