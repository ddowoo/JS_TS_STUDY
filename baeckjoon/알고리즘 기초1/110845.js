// const inputs = `15
// push 1
// push 2
// front
// back
// size
// empty
// pop
// pop
// pop
// size
// empty
// pop
// push 3
// empty
// front`.split("\n");
const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
inputs.shift();

const que = [];
let answer = "";
inputs.forEach((comm) => {
  const _comm = comm.split(" ");

  switch (_comm[0]) {
    case "push":
      que.push(_comm[1]);
      break;
    case "pop":
      if (que.length) {
        answer += que.shift() + "\n";
      } else {
        answer += "-1" + "\n";
      }
      break;
    case "size":
      answer += que.length + "\n";
      break;
    case "empty":
      answer += (que.length === 0 ? "1" : "0") + "\n";
      break;
    case "front":
      answer += (que.length === 0 ? "-1" : que[0]) + "\n";
      break;
    case "back":
      answer += (que.length === 0 ? "-1" : que[que.length - 1]) + "\n";
      break;
  }
});

console.log(answer);
