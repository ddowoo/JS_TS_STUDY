const inputs = `7
3 2 1 2 3 4 5`.split("\n");
// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
inputs.shift();
const numsArr = inputs[0].split(" ").map((num) => Number(num));
const stack = [];
const answer = new Array(numsArr.length).fill(-1);

numsArr.forEach((num, index) => {
  while (stack.length && num > numsArr[stack[stack.length - 1]]) {
    answer[stack.pop()] = num;
  }
  stack.push(index);
});

console.log(answer.join(" "));
