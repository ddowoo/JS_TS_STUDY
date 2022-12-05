//DFS와 BFS
// https://www.acmicpc.net/problem/1260

const inputs = `5 5 1
1 2
2 3
3 1
1 4
3 5`.split("\n");

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
console.log("graph", graph);
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

// const BFS = () => {
//   const stack = [V];

//   for (let i = 0; i < M; i++) {
//     const now = stack[i];

//     const tempStack = [];
//     for (let j = 0; j < M; j++) {
//       const route = routes[j];
//       if (route[0] === now && !stack.includes(route[1])) tempStack.push(route[1]);
//       if (route[1] === now && !stack.includes(route[0])) tempStack.push(route[0]);
//     }
//     tempStack.sort((a, b) => a - b);
//     stack.push(...tempStack);
//     if (stack.length === N) break;
//   }

//   console.log(stack.join(" "));
//   return stack.join(" ");
// };

// DFS(V, [V]);
// BFS();
