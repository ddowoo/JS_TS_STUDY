const getDecimal = (num) => {
  if (num === 1) return false;
  let count = 0;
  let index = 2;
  while (index <= Math.sqrt(num)) {
    if (num % index === 0) count++;
    index++;
  }

  return count === 0 ? true : false;
};

const inputs = `4
1 3 5 7`
  .toString()
  .trim()
  .split("\n");

const inputs = require("fs").readFileSync(0).toString().split("\n");

inputs.shift();
let count = 0;
inputs[0]
  .split(" ")
  .map((num) => Number(num))
  .forEach((num) => {
    getDecimal(num) && count++;
  });

console.log(count);
