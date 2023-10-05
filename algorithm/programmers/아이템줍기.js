function solution(rectangle, characterX, characterY, itemX, itemY) {
  const x = [50, 50];
  const y = [0, 0];
  let answer;
  rectangle.forEach((locaions) => {
    for (let i = 0; i < 4; i++) {
      if (i < 2) {
        x[i] = locaions[i] < x[i] ? locaions[i] : x[i];
      } else {
        const index = i - 2;
        y[index] = locaions[i] > y[index] ? locaions[i] : y[index];
      }
    }
  });
  console.log("x : ", x);
  console.log("y : ", y);
  let nodeGraph = new Array(y[1] + 2).fill([...new Array()]);
  // let nodeGraph = Array.from(Array(y[1] + 1), ()=> new Array(y[0]+1).fill);
  // new Array(y[1] + 1).fill([...new Array()]);
  let blockGraph = new Array(y[1] + 2).fill([...new Array()]);
  nodeGraph.forEach((array) => {
    for (let i = 0; i <= y[0]; i++) {
      array[i] = 0;
    }
  });
  blockGraph.forEach((array) => {
    for (let i = 0; i <= y[0]; i++) {
      array[i] = 0;
    }
  });

  rectangle.forEach((location, _) => {
    for (let i = location[1]; i <= location[3]; i++) {
      for (let j = location[0]; j <= location[2]; j++) {
        const _row = [...nodeGraph[i]];
        _row[j] = "x";
        nodeGraph[i] = _row;
      }
    }
  });
  rectangle.forEach((location, _) => {
    for (let i = location[1]; i < location[3]; i++) {
      for (let j = location[0]; j < location[2]; j++) {
        const _row = [...blockGraph[i]];
        _row[j] = "x";
        blockGraph[i] = _row;
      }
    }
  });

  const dx = [0, 1, 0, 1];
  const dy = [0, 0, 1, 1];
  blockGraph.forEach((row, rowIdx, rows) => {
    row.forEach((node, nodeIdx, nodes) => {
      if (node === 0) {
        for (let i = 0; i < 4; i++) {
          if (nodeIdx + 1 === nodes.length && (i === 2 || i === 3)) continue;
          if (rowIdx + 1 === rows.length && (i === 1 || i === 3)) continue;
          if (nodeGraph[rowIdx + dx[i]][nodeIdx + dy[i]] === "x") {
            nodeGraph[rowIdx + dx[i]][nodeIdx + dy[i]] = "y";
          }
        }
      }
    });
  });

  console.log("rowCount", nodeGraph.length);
  console.log("nodeCount", nodeGraph[0].length);

  console.log(nodeGraph);

  const bfs = () => {
    let visited = Array.from(Array(y[1] + 1), () => new Array(y[0] + 1).fill(0));
    let result = 0;
    const queue = [[characterY, characterX]];
    while (queue.length) {
      result++;
      let size = queue.length;

      for (let i = 0; i < size; i++) {
        let point = queue.shift();
        let curY = point[0];
        let curX = point[1];

        if (visited[curY][curX] !== 0) continue;
        console.log("curX : ", curX);
        console.log("curY : ", curY);
        visited[curY][curX] = result;
        if (curY === itemY && curX === itemX) answer = result;
        if (curY <= y[0] + 1 && nodeGraph[curY + 1][curX] === "y") queue.push([curY + 1, curX]);
        if (curX <= y[1] + 1 && nodeGraph[curY][curX + 1] === "y") queue.push([curY, curX + 1]);
        if (curY > 0 && nodeGraph[curY - 1][curX] === "y") queue.push([curY - 1, curX]);
        if (curX > 0 && nodeGraph[curY][curX - 1] === "y") queue.push([curY, curX - 1]);
      }
    }
    console.log(visited);
  };

  bfs();

  console.log(answer - 1);
}

// tester 2
// solution(
//   [
//     [1, 1, 8, 4],
//     [2, 2, 4, 9],
//     [3, 6, 9, 8],
//     [6, 3, 7, 7],
//   ],
//   9,
//   7,
//   6,
//   1
// );

// tester 3
// solution([[1, 1, 5, 7]], 1, 1, 4, 7);

solution(
  [
    [2, 2, 5, 5],
    [1, 3, 6, 4],
    [3, 1, 4, 6],
  ],
  1,
  4,
  6,
  3
);
