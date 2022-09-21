// const input = "baekjoon".toString().split("");
const input = require("fs").readFileSync(0).toString().trim().split("");

const answer = [];

const strToNum = (str) => {
  return str.charCodeAt(0) - 97;
};

for (let i = "a".charCodeAt(0) - 97; i <= "z".charCodeAt(0) - 97; i++) {
  answer[i] = 0;
}

input.forEach((str) => {
  answer[strToNum(str)] += 1;
});

console.log(answer.join(" "));
