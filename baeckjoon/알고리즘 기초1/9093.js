const inputs = `2
I am happy today
We want to win the first prize`.split("\n");

// const inputs = require("fs").readFileSync(0).toString().split("\n");

inputs.shift();
let answer = "";
inputs.forEach((input) => {
  const strArr = input.split(" ");
  let _str;
  strArr.forEach((str) => {
    _str = str.split("").reverse().join("");
    answer += _str + " ";
  });
  answer += "\n";
});

console.log(answer);
