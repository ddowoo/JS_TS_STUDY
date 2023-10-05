const inputs = `5
5
2
3
4
1`
  .toString()
  .trim()
  .split("\n");
// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");

// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
let answer = "";
inputs.shift();

inputs.sort((a, b) => a - b);
inputs.forEach((data) => (answer += data + "\n"));
console.log(answer);
