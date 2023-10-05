const input = "baekjoon".split("");
// const input = require("fs").readFileSync(0).toString().trim().split("");
const _input = [...input];
let charCodeArr = input.map((str) => str.charCodeAt(0));
charCodeArr = charCodeArr.sort((a, b) => a - b);
const answer = [];

charCodeArr.forEach((charCode) => {
  const str = String.fromCharCode(charCode);
  const _index = _input.indexOf(str);
  _input[_index] = 0;
  const word = input.slice(_index).join("");
  answer.push(word);
});

console.log(answer.sort().join("\n"));
