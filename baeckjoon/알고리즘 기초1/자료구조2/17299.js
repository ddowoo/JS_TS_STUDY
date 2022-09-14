const inputs = `6
1 1 1 2 1 1`.split("\n");
// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
inputs.shift();
const numArr = inputs[0].split(" ").map((num) => Number(num));

//   countArr을 배열로 했을 경우에는 시간초과였다
// 객체의  key-value구조가 배열의 순서 구조보다 탐색 시간이 빠른듯 하다
// index값을 알고 있으면 동일 할 것 같았지만 아니었다. (확인해봐야한다)
const countArr = {};
const indexStack = [];
const answer = new Array(numArr.length).fill(-1);
numArr.forEach((num) => {
  countArr[num] = (countArr[num] || 0) + 1;
});

numArr.forEach((num, index) => {
  while (indexStack && countArr[num] > countArr[numArr[indexStack[indexStack.length - 1]]]) {
    answer[indexStack.pop()] = num;
  }

  indexStack.push(index);
});

console.log(answer.join(" "));
