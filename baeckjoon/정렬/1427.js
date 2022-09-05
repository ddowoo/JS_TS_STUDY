// const input = "2143"
//   .toString()
//   .split("")
//   .map((num) => Number(num));

const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("")
  .map((num) => Number(num));

const inputs = input.sort((a, b) => b - a);
console.log(inputs.join(""));
