const s = "xababcdcdababcdcd";

function solution(s) {
  let length = 1;

  const lengthsArr = [];

  while (length <= Math.floor(s.length / 2)) {
    let strs = [];
    let sameNum = 1;
    for (let i = 0; i < s.length; i += length) {
      const cutStr = s.substring(i, i + length);

      if (strs[strs.length - 1] === cutStr) {
        sameNum++;
        if (i + length >= s.length && sameNum > 1) {
          const prevStr = strs[strs.length - 1];
          strs[strs.length - 1] = sameNum;
          strs.push(prevStr);
        }
      } else {
        if (sameNum > 1) {
          const prevStr = strs[strs.length - 1];
          strs[strs.length - 1] = sameNum;
          strs.push(prevStr);
        }
        strs.push(cutStr);
        sameNum = 1;
      }
    }

    lengthsArr.push(strs.join("").length);

    length++;
  }

  return Math.min(...lengthsArr);
}

console.log(solution(s));
