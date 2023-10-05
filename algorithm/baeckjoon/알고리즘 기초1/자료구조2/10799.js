// const inputs = "(((()(()()))(())()))(()())".split("");
const inputs = require("fs").readFileSync(0).toString().trim().split("");

const stack = [];
let topIndex = 0;
let stickCount = 0;

inputs.forEach((bracket, index) => {
  if (bracket === "(") {
    stack.push("(");
    topIndex = index;
  } else {
    stack.pop();
    if (index - topIndex === 1) {
      stickCount += stack.length;
    } else {
      stickCount++;
    }
  }
});

console.log(stickCount);
