// const input = "One is 1".split("");
const input = require("fs").readFileSync(0).toString().trim().split("");

const ROT13 = (str) => {
  const strCharCode = str.charCodeAt(0);

  if (strCharCode >= 97 && strCharCode <= 122) {
    let _strCharCode = strCharCode + 13;
    _strCharCode = _strCharCode > 122 ? _strCharCode - 26 : _strCharCode;
    return String.fromCharCode(_strCharCode);
  } else if (strCharCode >= 65 && strCharCode <= 90) {
    let _strCharCode = strCharCode + 13;
    _strCharCode = _strCharCode > 90 ? _strCharCode - 26 : _strCharCode;
    return String.fromCharCode(_strCharCode);
  } else return str;
};
let answer = "";
input.forEach((string) => {
  answer += ROT13(string);
});

console.log(answer);

// console.log("a".charCodeAt(0)); // 97
// console.log("z".charCodeAt(0)); // 122
// console.log("A".charCodeAt(0)); // 65
// console.log("Z".charCodeAt(0)); // 90
