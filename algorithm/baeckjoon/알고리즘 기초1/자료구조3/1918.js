// const input = "A+B*C".toString().trim().split(""); //ABC*+
// const input = "A+B".toString().trim().split("");
// const fs = require("fs");
// const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin") : `A+B*C*((D-E)*G)`).toString().trim().split("\n");
// const input = (() => {
//   let line = 0;
//   return () => stdin[line++];
// })();

// console.log(input);

const infix = "A+B*C*((D-E)*G)".split("");
let postfix = "";
let stack = [];

for (let i = 0; i < infix.length; i++) {
  let ch = infix[i];
  console.log(stack);
  console.log(postfix);
  if (ch >= "A" && ch <= "Z") postfix += ch;
  else if (ch === "(") stack.push(ch);
  else if (ch === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") postfix += stack.pop();
    stack.pop();
  } else if (ch === "+" || ch === "-") {
    while (stack.length && stack[stack.length - 1] !== "(") postfix += stack.pop();
    stack.push(ch);
  } else if (ch === "*" || ch === "/") {
    while (stack.length && (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")) postfix += stack.pop();
    stack.push(ch);
  }
}

while (stack.length) postfix += stack.pop();

console.log(postfix);
