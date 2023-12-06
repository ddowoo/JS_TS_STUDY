const fs = require("fs");
const [N, M] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const numArr = M.split(" ").map(Number);
let answer = 0;

const addFromArray = (numList) => {
  const addList = [];
  numList.forEach((num, index) => {
    if (index + 1 < numList.length) {
      addList.push(Math.abs(numList[index] - numList[index + 1]));
    }
  });
  let sum = 0;
  addList.forEach((num) => (sum += num));
  return sum;
};

const makeNumComb = (nowNum, leftNum) => {
  if (nowNum.length === numArr.length) {
    const sum = addFromArray(nowNum);
    answer = Math.max(answer, sum);
  } else {
    leftNum.forEach((num, index, left) => {
      const _leftNum = [...left];
      _leftNum.splice(index, 1);
      makeNumComb([...nowNum, num], _leftNum);
    });
  }
};

numArr.forEach((num, index, leftNum) => {
  const _leftNum = [...leftNum];
  _leftNum.splice(index, 1);
  makeNumComb([num], _leftNum);
});

console.log(answer);
