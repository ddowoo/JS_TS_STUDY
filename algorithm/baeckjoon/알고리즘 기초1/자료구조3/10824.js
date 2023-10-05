const input = "10 20 30 40".split(" ");
const input = require("fs").readFileSync(0).toString().split(" ");
const answer = [];
answer[0] = input[0] + input[1];
answer[1] = input[2] + input[3];

console.log(Number(answer[0]) + Number(answer[1]));
