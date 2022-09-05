const input = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`
  .toString()
  .trim()
  .split("\n");

// const input = require("fs").readFileSync(0).toString().trim().split("\n");

input.shift();
input.sort((a, b) => {
  return a.length - b.length || a.localeCompare(b);
});

let _input = new Set(input);
_input = new Array(..._input);

let answer = "";
_input.forEach((data) => {
  answer += data + "\n";
});
console.log(answer);
