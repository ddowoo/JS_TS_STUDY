function solution(n, computers) {
  const nodes = Array(n)
    .fill()
    .map((v, i) => i);
  const answer = [];

  while (nodes.length > 0) {
    let nowNode = nodes[0];
    const network = [];
    const queue = [nowNode];
    const delNodeIndex = nodes.indexOf(nowNode);
    nodes.splice(delNodeIndex, 1);

    while (queue.length > 0) {
      nowNode = queue[0];
      const nodeLine = computers[nowNode];

      for (let i = 0; i < nodeLine.length; i++) {
        if (nowNode !== i && nodeLine[i] === 1 && nodes.indexOf(i) !== -1) {
          const delNodeIndex = nodes.indexOf(i);
          nodes.splice(delNodeIndex, 1);
          queue.push(i);
        }
      }
      console.log();
      const endNode = queue.shift();
      network.push(endNode);
    }
    answer.push(network);
  }

  return console.log(answer.length);
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
