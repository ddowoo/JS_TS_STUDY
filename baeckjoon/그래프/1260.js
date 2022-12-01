//DFS와 BFS

const inputs = `4 5 1
1 2
1 3
1 4
2 4
3 4`.split("\n");

const node = Number(inputs[0].split(" ")[0]);
const line = inputs[0].split(" ")[1];
const startNode = Number(inputs[0].split(" ")[2]);

inputs.shift();
const routes = inputs.map((input) => input.split(" ").map((string) => Number(string)));

const DFS = (now, current) => {
  if (current.length === node) {
    return current.join(" ");
  } else {
    const canNext = [];

    //다음 경로로 갈곳
    routes.forEach((route) => {
      if (route[0] === now && !current.includes(route[1])) canNext.push(route[1]);
      if (route[1] === now && !current.includes(route[0])) canNext.push(route[0]);
    });

    // 갈수 있는 곳중 가장 숫자가 작은곳
    const next = Math.min(...canNext);
    current.push(next);

    DFS(next, current);
  }
};
DFS(startNode, [1]);
