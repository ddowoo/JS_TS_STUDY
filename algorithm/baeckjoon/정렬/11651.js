// const inputs = `5
// 0 4
// 1 2
// 1 -1
// 2 2
// 3 3`
//   .toString()
//   .trim()
//   .split("\n");
const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
inputs.shift();
const dots = inputs.map((data) => data.split(" ").map((data) => Number(data)));
dots.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});
let answer = "";
dots.forEach((data) => {
  answer += data.join(" ") + "\n";
});
console.log(answer);
