// const inputs = `22
// front
// back
// pop_front
// pop_back
// push_front 1
// front
// pop_back
// push_back 2
// back
// pop_front
// push_front 10
// push_front 333
// front
// back
// pop_back
// pop_back
// push_back 20
// push_back 1234
// front
// back
// pop_back
// pop_back`.split("\n");

const inputs = require("fs").readFileSync(0).toString().trim().split("\n");

inputs.shift();
const deque = [];
const printDeque = [];

inputs.forEach((comm) => {
  const _comm = comm.split(" ");
  switch (_comm[0]) {
    case "push_front":
      deque.unshift(Number(_comm[1]));
      break;
    case "push_back":
      deque.push(Number(_comm[1]));
      break;
    case "pop_front":
      if (deque[0] !== undefined) {
        printDeque.push(deque.shift());
      } else {
        printDeque.push(-1);
      }
      break;
    case "pop_back":
      if (deque[deque.length - 1] !== undefined) {
        printDeque.push(deque.pop());
      } else {
        printDeque.push(-1);
      }
      break;
    case "size":
      printDeque.push(deque.length);
      break;
    case "empty":
      printDeque.push(deque.length === 0 ? 1 : 0);
      break;
    case "front":
      printDeque.push(deque[0] !== undefined ? deque[0] : -1);
      break;
    case "back":
      printDeque.push(deque[deque.length - 1] !== undefined ? deque[deque.length - 1] : -1);
      break;
  }
});

console.log(printDeque.join("\n"));
