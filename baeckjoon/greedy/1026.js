const inputs = require("fs").readFileSync(0).toString().split("\n");
// const inputs = `5
// 1 1 1 6 0
// 2 7 8 3 1`.split("\n");

let answer = 0;
const a = inputs[1].split(" ").map((a) => Number(a));
const b = inputs[2].split(" ").map((b) => Number(b));

a.sort((a, b) => a - b);
b.sort((a, b) => b - a);

a.forEach((_, i) => {
  answer += a[i] * b[i];
});

console.log(answer);
