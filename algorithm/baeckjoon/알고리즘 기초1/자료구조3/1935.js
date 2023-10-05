const inputs = `3
AB+C-B*
5
4
1`.split("\n");
// const inputs = require("fs").readFileSync(0).trim().split("\n");
inputs.shift();
const expression = inputs.shift().split("");
const stack = [];
let answer = 0;

const cals = {
  "*": (a, b) => {
    return a * b;
  },
  "+": (a, b) => {
    return a + b;
  },
  "-": (a, b) => {
    return a - b;
  },
  "/": (a, b) => {
    return a / b;
  },
};

const strToNum = {};

const keys = Object.keys(cals);
let numIndex = 0;
expression.forEach((str) => {
  if (keys.indexOf(str) !== -1) {
    const b = Number(stack.pop());
    const a = Number(stack.pop());

    const answer = cals[str](a, b);
    stack.push(answer);
  } else {
    const keys = Object.keys(strToNum);
    if (keys.indexOf(str) === -1) {
      strToNum[str] = inputs[numIndex];
      stack.push(inputs[numIndex]);
      numIndex++;
    } else {
      stack.push(strToNum[str]);
    }
  }
});

console.log((Math.floor(stack[0] * 100) / 100).toFixed(2));
