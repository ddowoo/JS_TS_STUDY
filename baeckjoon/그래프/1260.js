//DFS와 BFS
// https://www.acmicpc.net/problem/1260

// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
//   .map((num) => second[Number(num)])
//   .join("");

const inputs = `5 5 1
1 2
2 3
3 1
1 4
3 5`.split("\n");
// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");

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
function MyDfs(now, answer) {
  if (answer.length === N) return console.log(answer.join(" "));
  const next = Math.min(...graph[now].filter((num) => !answer.includes(num)));

  if (next === Infinity) {
    for (let i = 1; i <= graph.length; i++) {
      if (graph[i] !== [] && !answer.includes(i)) {
        answer.push(i);
        MyDfs(next, answer);
        break;
      }
    }
  } else {
    answer.push(next);
    return MyDfs(next, answer);
  }
}
MyDfs(V, [V]);

const MyBfs = () => {
  const stack = [V];

  for (let i = 0; i < M; i++) {
    const now = stack[i];
    const next = graph[now].filter((num) => !stack.includes(num));
    next.sort((a, b) => a - b);
    stack.push(...next);
    if (stack.length === N) break;
  }

  return console.log(stack.join(" "));
};

MyBfs();

// 참고
// let visited = new Array(N + 1).fill(0);
// let answer_dfs = [];
// function DFS(v) {
//   if (visited[v]) return;
//   visited[v] = 1;
//   answer_dfs.push(v);
//   for (let i = 0; i < graph[v].length; i++) {
//     let next = graph[v][i];
//     if (visited[next] === 0) {
//       DFS(next);
//     }
//   }
// }
// DFS(V);
// console.log(answer_dfs.join(" "));

// const DFS = (now, current) => {
//   if (current.length === N || current.length > M) {
//     console.log(current.join(" "));
//     return current.join(" ");
//   } else {
//     const canNext = [];

//     //다음 경로로 갈곳
//     routes.forEach((route) => {
//       if (route[0] === now && !current.includes(route[1])) canNext.push(route[1]);
//       if (route[1] === now && !current.includes(route[0])) canNext.push(route[0]);
//     });
//     // 갈수 있는 곳중 가장 숫자가 작은곳
//     console.log("canNext", canNext);
//     const next = Math.min(...canNext);
//     current.push(next);

//     DFS(next, current);
//   }
// };

// DFS(V, [V]);
// BFS();
