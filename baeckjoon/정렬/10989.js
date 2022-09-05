const input = `10
5
2
3
1
4
2
3
5
1
7`
  .toString()
  .split("\n");
// const input = require("fs").readFileSync(0).toString().trim().split("\n");
input.shift();
input.sort((a, b) => a - b);
input.forEach((data) => console.log(data));
