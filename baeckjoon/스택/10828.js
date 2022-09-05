const input = `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`.split("\n");
input.shift();
let stack = [];
let answer = "";
input.forEach((comm) => {
  const _comm = comm.split(" ");
  if (_comm[0] === "push") stack.unshift(_comm[1]);
  if (_comm[0] === "pop") {
    const pop = stack.shift();
    if (pop) {
      answer += pop + "\n";
    } else {
      answer += -1 + "\n";
    }
  }
  if (_comm[0] === "size") answer += stack.length + "\n";
  if (_comm[0] === "empty") answer += stack.length === 0 ? 1 + "\n" : 0 + "\n";
  if (_comm[0] === "top") answer += stack[0] ? stack[0] + "\n" : "-1" + "\n";
});

console.log(answer);
