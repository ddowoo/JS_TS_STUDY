//DFS와 BFS
// 강의 : https://www.youtube.com/watch?v=7C9RgOcvkvo
// https://www.acmicpc.net/problem/1260

// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
//   .map((num) => second[Number(num)])
//   .join("");

// const inputs = `5 5 3
// 5 4
// 5 2
// 1 2
// 3 4
// 3 1`.split("\n");
const inputs = require("fs").readFileSync(0).toString().trim().split("\n");

const [N, M, V] = inputs[0].split(" ").map((r) => Number(r));
inputs.shift();
const routes = inputs.map((input) => input.split(" ").map((string) => Number(string)));
let graph = new Array(N + 1).fill([]);
routes.forEach((route) => {
  const from = route[0];
  const to = route[1];
  graph[from] = [...graph[from], to];
  graph[to] = [...graph[to], from];
});
graph = graph.map((nodes) => nodes.sort((a, b) => a - b));

let visited = [V];

//dfs는 stack,재귀를 활용
const dfs = (stack) => {
  if (visited.length === N || stack.length === 0) return console.log(visited.join(" "));

  const now = stack[stack.length - 1];
  const canNext = graph[now].filter((node) => !visited.includes(node) && node);

  if (canNext.length === 0) {
    stack.pop();
    return dfs(stack);
  } else {
    visited.push(canNext[0]);
    return dfs([...stack, canNext[0]]);
  }
};

dfs([V]);

visited = [V];
// bfs는 큐를 활용한다.
const bfs = () => {
  const queue = [V];

  while (queue.length !== 0) {
    const now = queue.shift();
    const canNext = graph[now];
    for (let i = 0; i < canNext.length; i++) {
      if (!visited.includes(canNext[i])) {
        visited.push(canNext[i]);
        queue.push(canNext[i]);
      }
    }
  }
  return console.log(visited.join(" "));
};
bfs();
