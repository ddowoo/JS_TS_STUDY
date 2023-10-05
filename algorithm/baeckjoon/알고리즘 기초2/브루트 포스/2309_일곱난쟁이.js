var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const peoples = input.map((value) => Number(value)).sort((a, b) => a - b);

for (let i = 0; i < peoples.length; i++) {
  for (let j = i + 1; j < peoples.length; j++) {
    const _peoples = [...peoples];
    _peoples[i] = 0;
    _peoples[j] = 0;
    if (_peoples.reduce((a, b) => a + b, 0) === 100) {
      peoples[i] = 0;
      peoples[j] = 0;
      break;
    }
  }
}

console.log(peoples.filter((value) => value !== 0).join("\n"));
