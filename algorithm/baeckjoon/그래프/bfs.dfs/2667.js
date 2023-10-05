const inputs = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`
  .trim()
  .split("\n");

inputs.shift();

const graph = inputs.map((line) => line.split(""));
const visited = inputs.map((line) => new Array(line.length).fill(0));
// console.log(graph);
console.log(visited);

const xd = [1, 0, -1, 0];
const yd = [0, 1, 0, -1];
let nowHome = 1;
const dfs = (stack) => {
  const nowX = stack[0][0];
  const nowY = stack[0][1];
  visited[nowY][nowX] = nowHome;

  for (let i = 0; i < 4; i++) {
    const nextX = nowX + xd[i];
    const nextY = nowY + yd[i];
    console.log("nextX : ", nextX, "nextY : ", nextY);

    if (nextX >= 0 && nextY >= 0) {
      console.log("둘다 음수는 아님");
      console.log("visited : ", visited[nextY][nextX]);
      console.log("graph : ", graph[nextY][nextX]);

      if (visited[nextY][nextX] === 0 && graph[nextY][nextX] === "1") {
        stack.push([nextX, nextY]);
      }
    }
  }

  console.log(stack);
};

dfs([[0, 0]]);
