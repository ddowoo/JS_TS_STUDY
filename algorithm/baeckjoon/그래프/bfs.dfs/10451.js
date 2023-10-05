const inputs = `2
8
3 2 7 8 1 4 5 6
10
2 1 3 4 5 6 7 9 10 8`
  .trim()
  .split("\n");

// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");

inputs.shift();

for (let i = 0; i < inputs.length; i++) {
  if (i % 2 === 1) {
    solve(inputs[i]);
  }
}

function solve(_nums) {
  const nums = _nums.split(" ").map((num) => Number(num));
  const graph = nums.map((num, index) => {
    return [num, index + 1];
  });

  let temp = [graph[0]];
  graph.splice(0, 1);
  const dfs = (stack, temp, graph) => {
    if (graph.length === 0) return console.log(stack.length);

    const now = temp.length > 0 ? temp[temp.length - 1][1] : graph[0][1];

    let canNext = false;

    for (let i = 0; i < graph.length; i++) {
      const node = graph[i][0];
      if (node === now) {
        temp.push(graph[i]);
        graph.splice(i, 1);
        canNext = true;
        break;
      }
    }

    if (canNext) {
      graph.length === 0 && stack.push([...temp, ...graph]);
      dfs(stack, temp, graph);
    } else {
      stack.push(temp);
      let _temp = [];
      dfs(stack, _temp, graph);
    }
  };

  return dfs([], temp, graph);
}
