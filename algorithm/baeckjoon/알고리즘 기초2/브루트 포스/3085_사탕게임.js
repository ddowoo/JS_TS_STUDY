// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = `5
YCPZY
CYZZP
CCPPP
YCYZC
CPPZZ
`
  .toString()
  .trim()
  .split("\n");

console.log("input : ", input);

const conut = Number(input.shift());

let answer = 0;

const Bomboni = input.map((v) => {
  return v.split("");
});

const dfs = (xIndex, yIndex, now, sum) => {
  answer = sum >= answer ? sum : answer;

  if (xIndex + 1 < conut) {
    const type = Bomboni[xIndex + 1][yIndex];

    if (type === now) {
      dfs(xIndex + 1, yIndex, now, sum + 1);
    } else {
      dfs(xIndex + 1, yIndex, type, 1);
    }
  }
  if (yIndex + 1 < conut) {
    const type = Bomboni[xIndex][yIndex + 1];
    console.log("type : ", type);
    if (type === now) {
      dfs(xIndex, yIndex + 1, now, sum + 1);
    } else {
      dfs(xIndex, yIndex + 1, type, 1);
    }
  }
};

dfs(0, 0, input[0][0], 1);
console.log("answer : ", answer);
