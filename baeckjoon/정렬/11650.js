const inputs = `5
3 4
1 1
1 -1
2 2
3 3`
  .toString()
  .trim()
  .split("\n");
// const inputs = require("fs").toString().trim().split("\n");
inputs.shift();
const dots = inputs.map((data) => data.split(" ").map((data) => Number(data)));
dots.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});
let answer = "";
dots.forEach((data) => {
  answer += data.join(" ") + "\n";
});
console.log(answer);
