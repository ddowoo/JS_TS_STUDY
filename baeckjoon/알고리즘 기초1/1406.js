const inputs = `abcd
3
P x
L
P y`.split("\n");

//커서와 같은  하나의 기준을 두고 데이터를 양쪽으로 옮길때
// stack개념을 쓰니까 훨씬 쉽네

const firstLine = Number(inputs[0]);
const stack_L = isNaN(firstLine) ? inputs.shift().split("") : [];
const stack_R = [];
inputs.shift();

inputs.forEach((comm) => {
  const _comm = comm.split(" ");

  if (_comm[0] === "L") {
    if (stack_L.length) stack_R.push(stack_L.pop());
  } else if (_comm[0] === "D") {
    if (stack_R.length) stack_L.push(stack_R.pop());
  } else if (_comm[0] === "B") {
    stack_L.pop();
  } else if (_comm[0] === "P") {
    stack_L.push(_comm[1]);
  }
});

console.log(stack_L.concat(stack_R.reverse()).join(""));

// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");

// 값은 구해지지만 시간초과 문제 ---------   stack을 활용한 풀이 추천
// let text = inputs.shift().split("");
// inputs.shift();
// let currentPosition = text.length;
// const L = () => {
//   if (currentPosition > 0) currentPosition--;
// };

// const D = () => {
//   if (currentPosition < text.length) currentPosition++;
// };

// const B = () => {
//   if (currentPosition !== 0) text.splice(currentPosition - 1, 1);
//   L();
// };

// const P = (s) => {
//   text.splice(currentPosition, 0, s);
//   D();
// };

// inputs.forEach((comm, i) => {
//   const _comm = comm.split(" ");
//   if (_comm[0] === "L" && currentPosition !== 0) L();
//   else if (_comm[0] === "D" && currentPosition !== text.length) D();
//   else if (_comm[0] === "B") B();
//   else if (_comm[0] === "P") P(_comm[1]);
// });

// console.log(text.join(""));
