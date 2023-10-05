const inputs = `3 1`.toString().trim().split(" ").map(Number);

// const fs = require("fs");
// const inputs = fs
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);
const N = inputs[0];
const M = inputs[1];
const numArr = new Array(N).fill().map((value, index) => index + 1);
// -----------------------------------------------------------------
// const numArr = Array.from({ length: N }, (_, index) => index + 1);
// Array.from() 유사 배열 객체 (Array-like Objects)를 배열로 변환시 사용한다
const answers = [];

const dfs = (nowSum, remainNumArr) => {
  if (nowSum.length === M) {
    answers.push(nowSum);
  } else {
    remainNumArr.forEach((num) => {
      const newSum = nowSum + num;
      const newRemainNumArr = remainNumArr.filter((_num) => num < _num);
      dfs(newSum, newRemainNumArr);
    });
  }
};

numArr.forEach((num, _) => {
  const _list = numArr.filter((_num) => _num > num);
  dfs(num.toString(), _list);
});

answers.forEach((num) => {
  console.log(num.toString().split("").join(" ").trim());
});
