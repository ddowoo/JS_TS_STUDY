const inputs = `10 500
93 181 245 214 315 36 185 138 216 295`
  .toString()
  .trim()
  .split("\n");

// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
const target = inputs[0].split(" ")[1];
const cards = inputs[1].split(" ").map((num) => Number(num));
const sumList = [];

for (let i = 0; i < cards.length - 2; i++) {
  for (let j = i + 1; j < cards.length - 1; j++) {
    for (let k = i + 2; k < cards.length; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= target) {
        sumList.push(sum);
      }
    }
  }
}

let max = 0;
sumList.forEach((data) => (max = data > max ? data : max));

console.log(max);
