// const inputs = `3
// 1 45000
// 6 10
// 13 17`.split("\n");
const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
inputs.shift();

const getComDivisor = (num) => {
  const divisor = [1];
  let index = 2;
  while (num !== 1) {
    if (num % index === 0) {
      num = num / index;
      divisor.push(index);
    } else {
      index++;
    }
  }

  return divisor;
};

inputs.forEach((nums) => {
  const max = [];
  const _nums = nums.split(" ").map((num) => Number(num));
  const comDivA = getComDivisor(_nums[0]);
  const comDivB = getComDivisor(_nums[1]);
  comDivA.forEach((num) => {
    max.push(num);
    if (comDivB.includes(num)) comDivB[comDivB.indexOf(num)] = 0;
  });

  comDivB.forEach((num) => num !== 0 && max.push(num));

  console.log(max.reduce((a, b) => a * b, 1));
});
