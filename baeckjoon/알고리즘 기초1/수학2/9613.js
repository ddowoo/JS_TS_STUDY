const getComDivisor = (num) => {
  if (num === 0) return [];
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

const getGCD = (one, two) => {
  if (one === 0 || two === 0) return 0;

  const divisors = [1];
  const oneDivs = getComDivisor(one);
  const twoDivs = getComDivisor(two);

  oneDivs.forEach((num) => {
    if (twoDivs.includes(num)) {
      const index = twoDivs.indexOf(num);
      twoDivs[index] = 0;
      divisors.push(num);
    }
  });

  const plus = divisors.reduce((a, b) => {
    return a * b;
  }, 1);

  return plus;
};

// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");

let inputs = `3
4 10 20 30 40
3 7 5 12
3 125 15 25`
  .toString()
  .split("\n");

inputs.shift();
inputs = inputs.map((nums) => {
  const _nums = nums.split(" ").map((_num) => Number(_num));
  _nums.shift();
  return _nums;
});
inputs.forEach((nums) => {
  const GCDArr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const a = nums[i];
      const b = nums[j];
      const GCD = getGCD(a, b);
      GCDArr.push(GCD);
    }
  }
  console.log(
    GCDArr.reduce((a, b) => {
      return a + b;
    }, 0)
  );
});
