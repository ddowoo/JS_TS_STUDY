const input = "5 8 4".split(" ").map((str) => Number(str));
const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map((str) => Number(str));
const A = input[0];
const B = input[1];
const C = input[2];
console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
