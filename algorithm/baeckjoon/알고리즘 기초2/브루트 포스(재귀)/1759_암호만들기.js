const inputs = `4 6
a t c i s w`
  .toString()
  .split("\n");

const COND_LIST = ["a", "e", "i", "o", "u"];
const LENGTH = parseInt(inputs.shift().split(" ")[0]);
const alpList = inputs[0].split(" ");
alpList.sort();

const answerList = [];

const checkPwCond = (pw) => {
  let condCount = 0;
  let anotherCount = 0;

  pw.forEach((word) => {
    if (COND_LIST.includes(word)) {
      condCount++;
    } else {
      anotherCount++;
    }
  });

  return anotherCount >= 2 && condCount >= 1;
};

const makePw = (now, leftAlpList) => {
  if (now.length === LENGTH) {
    if (checkPwCond(now)) {
      answerList.push(now.join(""));
    }
    //  else문 대신 return으로 dfs 탈출시키기
    return;
  }
  //   else {
  leftAlpList.forEach((alp) => {
    const _now = [...now];
    _now.push(alp);

    const _leftAlpList = [...leftAlpList];
    const index = _leftAlpList.indexOf(alp);
    const __leftAlpList = _leftAlpList.splice(index + 1);

    makePw(_now, __leftAlpList);
  });
  //   }
};

// alpList.forEach((alp) => {
//   const now = [alp];
//   const leftAlpList = [...alpList];
//   const index = leftAlpList.indexOf(alp);
//   const _leftAlpList = leftAlpList.splice(index + 1);
//   makePw(now, _leftAlpList);
// });

// 시작부터 만든 식으로 쓰기
makePw([], alpList);

console.log(answerList.join("\n"));
