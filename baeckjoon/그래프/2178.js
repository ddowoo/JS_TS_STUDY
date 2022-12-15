const input = `4 6
110110
110110
111111
111101`.split("\n");

// const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((n) => Number(n));
const graph = input.map((line) => line.split(""));
const check = Array.from({ length: N }, () => Array(M).fill(0));
check[0][0] = 1;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const visited = ["0/0"];

const answers = [];
const dfs = (row, col, check) => {
  console.log("row : ", row, "col : ", col);
  console.log(check);
  if (row === N - 1 && col === M - 1) {
    console.log(check[row][col]);
    // let prev = visited[visited.length - 1];
    // prev = prev.split("/");
    // return dfs(Number(prev[0]), Number(prev[1]), check);
  }

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [row + dx[i], col + dy[i]];
    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

    if (graph[nx][ny] === "1" && check[nx][ny] === 0 && visited.indexOf(`${nx}/${ny}`) === -1) {
      check[nx][ny] = check[row][col] + 1;
      visited.push(`${nx}/${ny}`);
      dfs(nx, ny, check);
      break;
    }
  }

  if (visited.length !== 0) {
    console.log(visited[visited.length - 1]);
    let prev = visited.pop().split("/");
    return dfs(Number(prev[0]), Number(prev[1]), check);
  }
};

dfs(0, 0, check);
console.log(Math.min(...answers));
// const bfs = (row, col) => {
//   const queue = [];

//   queue.push([row, col]);
//   check[row][col] = 1;
//   while (queue.length > 0) {
//     const [x, y] = queue.shift();

//     for (let i = 0; i < 4; i++) {
//       const [nx, ny] = [x + dx[i], y + dy[i]];
//       if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

//       if (graph[nx][ny] === "1" && check[nx][ny] === 0) {
//         check[nx][ny] = check[x][y] + 1;
//         queue.push([nx, ny]);
//       }
//     }
//   }

//   return console.log(check[N - 1][M - 1]);
// };
// bfs(0, 0);
