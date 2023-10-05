const input = "10".trim();
// const input = require("fs").readFileSync(0).toString().trim();
let number = Number(input);
let answer = 1;
if (number === 0) console.log(1);
else {
  while (number >= 1) {
    answer *= number;
    number--;
  }
  console.log(answer);
}
