// const input = "200 200".split(" ").map((str) => Number(str));
const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map((str) => Number(str));
let A = input[0];
let B = input[1];

const getCommonNum = (num) => {
  const comNums = [1];
  let share = 2;
  while (num !== 1) {
    if (num % share === 0) {
      num = num / share;
      comNums.push(share);
    } else {
      share++;
    }
  }
  return comNums;
};

const min = [];
const max = [];
const firstNums = getCommonNum(A);
const secondNums = getCommonNum(B);
const _secondNums = [...secondNums];

firstNums.forEach((num) => {
  max.push(num);

  if (secondNums.includes(num)) {
    secondNums[secondNums.indexOf(num)] = 0;
    min.push(num);
  }
});

secondNums.forEach((num) => {
  if (num !== 0) {
    max.push(num);
  }
});

console.log(min.reduce((a, b) => a * b, 1));
console.log(max.reduce((a, b) => a * b, 1));
