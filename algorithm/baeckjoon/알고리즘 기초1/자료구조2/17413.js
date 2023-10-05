const input = "<open>tag<close>".split("");
// const input = require('fs').readFileSync(0).toString().trim().split('')
const _input = [];
let answer = "";
let isTag = false;
let tempStr = "";

input.forEach((str, i) => {
  tempStr += str;
  if (str === "<") {
    i !== 0 && _input.push(tempStr.slice(0, -1));
    isTag = true;
    tempStr = "<";
  }

  if (!isTag && str === " ") {
    _input.push(tempStr.slice(0, -1));
    _input.push(" ");
    tempStr = "";
  }

  if (str === ">") {
    isTag = false;
    _input.push(tempStr);
    tempStr = "";
  }

  if (i + 1 === input.length) {
    _input.push(tempStr);
  }
});

_input.forEach((str) => {
  if (str.indexOf("<") === -1) {
    answer += str.split("").reverse().join("");
  } else {
    answer += str;
  }
});

console.log(answer.trim());
