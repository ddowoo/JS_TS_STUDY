// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `80000
2
8 9`
  .toString()
  .trim()
  .split("\n");

const target = Number(input[0]);
const breakCount = Number(input[1]);
const noNumber = input[2]?.split(" ").map((n) => Number(n)) ?? [];
const useNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((n) => !noNumber.includes(n));
const checkCanMove = (channel) => {
  if (breakCount === 0) {
    return true;
  } else {
    const channelList = channel
      .toString()
      .split("")
      .map((n) => Number(n));
    let isCanMove = true;

    for (i = 0; i < channelList.length; i++) {
      if (useNumber.includes(channelList[i]) === false) {
        isCanMove = false;
        break;
      }
    }

    return isCanMove;
  }
};

let answer = 1000000;

for (let i = 0; i <= 999999; i++) {
  const onlyUpDown = Math.abs(target - 100);
  let useAllBtn = 1000000;
  if (checkCanMove(i)) {
    const btnPressCount = i.toString().length;

    useAllBtn = btnPressCount + Math.abs(target - i);
  }
  const min = Math.min(onlyUpDown, useAllBtn);

  answer = min <= answer ? min : answer;
}

console.log(answer);

// const target = input[0].split("").map((r) => Number(r));
// const brokenBtnCount = Number(input[1]);
// const brokenBtns = input[2]
//   .trim()
//   .split(" ")
//   .map((r) => Number(r));

// const delSpace = (arr) => {
//   while (arr[0] === 0) {
//     arr.shift();
//   }
//   return arr.length === 0 ? [0] : arr;
// };
// const arrToNumber = (arr) => {
//   return Number(arr.join(""));
// };

// const already = [];

// const solution = (brokenBtns, target) => {
//   const btns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   brokenBtns.forEach((btn) => {
//     const index = btns.indexOf(btn);
//     btns[index] = -1;
//   });
//   const canBtn = btns.filter((btn) => btn >= 0);

//   const onlyPressUpDown = Math.abs(arrToNumber(target) - 100);

//   let minimum = 100000000;
//   let miniList;
//   const dfs = (channelList, index) => {
//     const nowChannelList = [...channelList, canBtn[index]];
//     if (arrToNumber(channelList) <= arrToNumber(target) * 2) {
//       if (already.includes(nowChannelList.join("")) === false) {
//         already.push(nowChannelList.join(""));
//         if (nowChannelList.length === target.length) {
//           const _channelList = [...delSpace(channelList)];
//           const lengthFromTarget = Math.abs(arrToNumber(target) - arrToNumber(_channelList));

//           const pressCount = _channelList.length + lengthFromTarget;
//           if (pressCount <= minimum) {
//             minimum = pressCount;
//             miniList = nowChannelList.join("");
//           }
//           canBtn.forEach((_, index) => dfs(nowChannelList, index));
//         } else if (nowChannelList.length < target.length + 1) {
//           canBtn.forEach((_, index) => dfs(nowChannelList, index));
//         } else {
//           const _channelList = [...delSpace(channelList)];
//           const lengthFromTarget = Math.abs(arrToNumber(target) - arrToNumber(_channelList));
//           const pressCount = _channelList.length + lengthFromTarget;
//           minimum = pressCount <= minimum ? pressCount : minimum;
//         }
//       }
//     }
//   };

//   canBtn.forEach((_, index) => dfs([], index));

//   const answer = Math.min(minimum, onlyPressUpDown);

//   console.log(answer);
// };

// solution(brokenBtnCount === 0 ? [] : brokenBtns, target);
