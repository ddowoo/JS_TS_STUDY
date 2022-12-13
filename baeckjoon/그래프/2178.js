// const input = `4 6
// 101111
// 101010
// 101011
// 111011`.split("\n");

const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((n) => Number(n));

const graph = input.map((line) => line.split(""));
const check = Array.from({ length: N }, () => Array(M).fill(0));

const bfs = (row, col) => {
  const queue = [];

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  queue.push([row, col]);
  check[row][col] = 1;
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

      if (graph[nx][ny] === "1" && check[nx][ny] === 0) {
        check[nx][ny] = check[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return console.log(check[N - 1][M - 1]);
};
bfs(0, 0);
