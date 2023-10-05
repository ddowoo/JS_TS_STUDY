const chkDecimal = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// const inputs = `8
// 20
// 42
// 0`
//   .split("\n")
//   .map((num) => Number(num));

const inputs = require("fs")
  .readFileSync(0)
  .toString()
  .split("\n")
  .map((num) => Number(num));

inputs.pop();
const max = Math.max(...inputs);

const decArr = [2, 3, 5];
for (let i = 7; i <= max; i++) {
  if (chkDecimal(i)) decArr.push(i);
}

let _answer = "";

inputs.forEach((num) => {
  const _decArr = decArr.filter((dec) => dec < num);

  let answer = "";
  let left = 0;
  let right = _decArr.length - 1;
  while (answer === "") {
    const sum = _decArr[left] + _decArr[right];
    if (num === sum) {
      answer = `${num} = ${_decArr[left]} + ${_decArr[right]}`;
    } else if (num < sum) {
      right--;
    } else {
      left++;
    }
  }
  _answer += answer + "\n";
});

console.log(_answer);
