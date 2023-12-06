// const fs = require("fs");
// const N = fs.readFileSync("./dev/stdin").toString().trim();
const N = 3;
const numArr = new Array(Number(N)).fill("").map((_, index) => index + 1);

const makeStack = (nowStack, leftNum) => {
  if (nowStack.length === numArr.length) {
    console.log(nowStack.join(" "));
  } else {
    leftNum.forEach((num, index, numList) => {
      const _numList = [...numList];
      _numList.splice(index, 1);
      makeStack([...nowStack, num], _numList);
    });
  }
};

numArr.forEach((num, index, numList) => {
  const _numList = [...numList];
  _numList.splice(index, 1);

  makeStack([num], _numList);
});
