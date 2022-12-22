function solution(rectangle, characterX, characterY, itemX, itemY) {
  const x = [50, 50];
  const y = [0, 0];

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

  let nodeGraph = new Array(y[1] + 1).fill([...new Array()]);
  let blockGraph = new Array(y[1] + 1).fill([...new Array()]);
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

  console.log(nodeGraph);
}

solution([
  [1, 1, 7, 4],
  [3, 2, 5, 5],
  [4, 3, 6, 9],
  [2, 6, 8, 8],
]);
//   console.log("rowIds ", rowIdx);
//   console.log("nodeIdx ", nodeIdx);
//   console.log("i ", i);
