// const input = require("fs").readFileSync(0).toString().trim().split("\n");
const input = `1
1`
  .toString()
  .trim()
  .split("\n");
const a = Number(input[0]);
const b = Number(input[1]);
let sum = 0;
const arr = [];

const getNum = (num) => {
  let count = 0;
  if (num === 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      count++;
      break;
    }
  }

  return count === 0 ? true : false;
};

for (let i = a; i <= b; i++) {
  if (getNum(i)) {
    sum = sum + i;
    arr.push(i);
  }
}

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(Math.min(...arr));
}
