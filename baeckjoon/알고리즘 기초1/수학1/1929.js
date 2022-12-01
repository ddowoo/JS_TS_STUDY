const chkDecimal = (num) => {
  if (num === 1) return false;
  let count = 0;
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) count++;
    i++;
  }
  return count === 0 ? true : false;
};

// const inputs = "3 16".split(" ").map((num) => parseInt(num));
const inputs = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map((num) => parseInt(num));
const answer = [];

let num = inputs[0];
while (num <= inputs[1]) {
  if (chkDecimal(num)) answer.push(num);
  num++;
}
console.log(answer.join("\n"));
