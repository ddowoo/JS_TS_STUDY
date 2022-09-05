// const input = `7
// -99 0 3 0 7 55 123`
//   .toString()
//   .trim()
//   .split("\n");
// const input = require("fs").readFileSync(0).toString().trim().split("\n");
input.shift();

const arr = input[0].split(" ").map((x) => Number(x));

let set = new Set(arr);
let uniq = [...set].sort((a, b) => a - b);

let dic = {};
uniq.forEach((e, index) => {
  dic[e] = index;
});
let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += dic[arr[i]] + " ";
}

console.log(answer);
