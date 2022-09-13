const inputs = "7 3".split(" ");
// const inputs = require("fs").readFileSync(0).toString().trim().split(" ");
const length = Number(inputs[0]);
const cutLine = Number(inputs[1]);

const nums = [];
const yoStack = [];

for (let i = 0; i < length; i++) {
  nums.push(i + 1);
}

let count = 0;
let index = 0;

while (yoStack.length < length) {
  if (nums[index] !== null) {
    count++;
    if (count === cutLine) {
      yoStack.push(nums[index]);
      nums[index] = null;
      count = 0;
    }
  }
  index++;
  index = index >= length ? index % length : index;
}

console.log("<" + yoStack.join(", ") + ">");
