// const inputs = `3
// 0
// 0
// -1`
//   .trim()
//   .split("\n")
//   .map((num) => Number(num));
const inputs = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));
inputs.shift();

inputs.sort((a, b) => a - b);

let sum = 0;
const arr = {};
const _maxArr = [];
let _max = null;
inputs.forEach((num) => (arr[num] = 0));
inputs.forEach((num) => (arr[num] += 1));

inputs.forEach((num) => {
  if (_max === null || _max < arr[num]) {
    _max = arr[num];
  }
});

inputs.forEach((num) => {
  if (_max === arr[num]) {
    if (_maxArr.indexOf(num) === -1) {
      _maxArr.push(num);
    }
  }
});

_maxArr.sort((a, b) => a - b);

const maxNum = _maxArr.length === 1 ? _maxArr[0] : _maxArr[1];

inputs.forEach((num) => (sum += num));
const average = Math.round(sum / inputs.length);
const biggest = Math.max(...inputs);
const smallest = Math.min(...inputs);

console.log(average === -0 ? 0 : average);
console.log(inputs[Math.floor(inputs.length / 2)]);
console.log(maxNum);
console.log(biggest - smallest);
