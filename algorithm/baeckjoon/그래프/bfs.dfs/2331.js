// const inputs = "57 2"
//   .toString()
//   .trim()
//   .split(" ")
//   .map((str) => Number(str));

const inputs = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map((str) => Number(str));

const dfs = (stack) => {
  const recent = stack[stack.length - 1];

  if (stack.indexOf(recent) !== stack.length - 1) {
    const cutLine = stack.indexOf(recent);

    const answer = stack.splice(0, cutLine);
    return console.log(answer.length);
  }
  const prev = recent
    .toString()
    .split("")
    .map((str) => Number(str));
  let now = 0;

  for (let i = 0; i < prev.length; i++) {
    now += Math.pow(prev[i], inputs[1]);
  }
  stack.push(now);
  dfs(stack);
};

dfs([inputs[0]]);
