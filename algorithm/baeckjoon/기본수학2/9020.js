const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

// const input = `3
// 8
// 10
// 16`
//   .toString()
//   .trim()
//   .split("\n")
//   .map((num) => Number(num));

input.shift();

const check = (num) => {
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

const getList = (input) => {
  let arr = [];

  for (let i = 1; i < input; i++) {
    if (check(i)) {
      arr.push(i);
    }
  }
  return arr;
};

const checkSum = (arr = [], target) => {
  const _arr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        const t = [arr[i], arr[j]];
        _arr.push(t);
      }
    }
  }

  return _arr;
};

const getMinimum = (arr = []) => {
  let set = null;
  let minimum = null;
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i][0];
    const b = arr[i][1];

    if (b - a < minimum || minimum === null) {
      minimum = b - a;
      set = [a, b];
    }
  }

  return console.log(set[0] + " " + set[1]);
};

for (let i = 0; i < input.length; i++) {
  const _list = getList(input[i]);
  const _sum = checkSum(_list, input[i]);
  getMinimum(_sum);
}
