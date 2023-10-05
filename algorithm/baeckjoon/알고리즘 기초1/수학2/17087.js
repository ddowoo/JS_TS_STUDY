const getGCD = (a, b) => {
  let r;
  while (b) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
};

// const inputs = require("fs")
//   .readFileSync(0)
//   .toString()
//   .split("\n")
//   .map((x) => x.split(" ").map((num) => Number(num)));

const inputs = `3 3
1 7 11`
  .split("\n")
  .map((nums) => nums.split(" ").map((num) => Number(num)));

const position = inputs.shift()[1];
const bros = inputs[0];
if (bros.length === 1) {
  return console.log(inputs[0] - position);
}

let nums = bros.map((num) => Math.abs(num - position));

let tempGCD = getGCD(nums[0], nums[1]);
if (nums.length === 2) console.log(tempGCD);
else {
  for (let i = 2; i < nums.length; i++) {
    tempGCD = getGCD(tempGCD, nums[i]);
  }
  console.log(tempGCD);
}
