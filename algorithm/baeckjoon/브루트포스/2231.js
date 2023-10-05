// const input = parseInt(require("fs").readFileSync(0).toString().trim());

const input = 9999;

let now = 0;
let minimum = 0;

while (now < 216) {
  let sum = 0;
  const nowStr = now.toString();

  for (let i = 0; i < nowStr.length; i++) {
    sum += parseInt(nowStr[i]);
  }
  if (now === 9972) {
    console.log(sum);
  }
  sum += now;

  if (sum === input) {
    minimum = now;
    break;
  }
  now++;
}

console.log(minimum);
