const input = "baekjoon".toString().split("");
// const input = require("fs").readFileSync(0).toString().trim().split("");

const alphabet = new Array(26).fill(0);
const answer = [];
alphabet.forEach((e, index) => {
  answer[index] = input.indexOf(String.fromCharCode(index + 97));
});

console.log(answer.join(" "));
