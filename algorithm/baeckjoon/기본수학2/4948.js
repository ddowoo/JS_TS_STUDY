const inputs = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((data) => {
    return Number(data);
  });

// const inputs = `1
// 10
// 13
// 100
// 1000
// 10000
// 100000
// 0`
//   .toString()
//   .trim()
//   .split("\n")
//   .map((data) => {
//     return Number(data);
//   });

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

const getCount = (num) => {
  let count = 0;
  for (let i = num + 1; i <= num * 2; i++) {
    if (getNum(i)) {
      count++;
    }
  }
  console.log(count);
};

for (let i = 0; i < inputs.length - 1; i++) {
  getCount(inputs[i]);
}
