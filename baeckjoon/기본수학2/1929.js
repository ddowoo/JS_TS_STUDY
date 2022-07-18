// const inputs = require("fs")
//   .readFileSync(0)
//   .toString()
//   .trim()
//   .split(" ")
//   .map((data) => Number(data));
const inputs = "3 16"
  .trim()
  .split(" ")
  .map((data) => Number(data));

const a = inputs[0];
const b = inputs[1];
const getNum = (num) => {
  let count = 0;

  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count++;
      break;
    }
  }

  return count === 0 ? true : false;
};

console.log(getNum(25));

// for (let i = a; i <= b; i++) {
//   if (getNum(i)) {
//     console.log(i);
//   }
// }
