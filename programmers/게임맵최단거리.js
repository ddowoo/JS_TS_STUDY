// BFS로 풀기
function solution(maps) {
  let x = maps[0].length - 1;
  let y = maps.length - 1;

  //시작 지점 (특정 지점에서 갈수있는 점들을 모아둘것이다.)
  let queue = [[0, 0]];

  // 얕은 복사로 새로운 배열을 만든다 (form)
  let visited = Array.from(Array(maps.length), () => new Array(maps[0].length).fill(false));

  visited[0][0] = "p";
  console.log(visited);
  let result = 0;

  while (queue.length) {
    result++; //지금 있는 곳 한칸을 칠해줌
    let size = queue.length; //for문은 이전queue에서 갈수있었던 모든 지점 수만큼 돌아간다

    for (let i = 0; i < size; i++) {
      let point = queue.shift(); // 지점들을 하나 하나 제거하며 각 지점에서 갈수있는 다음 지점들을 다시 queue에 모아준다
      let curY = point[0];
      let curX = point[1];

      if (visited[curY][curX]) continue; // 현재 지점이 이미 방문했으면 패스

      maps[curY][curX] = 0;

      visited[curY][curX] = true;
      if (curY === y && curX === x) return result;

      // 현재 내 위치에서 갈수있는 곳들을 queue에 모아준다.
      if (curY < y && maps[curY + 1][curX] === 1) queue.push([curY + 1, curX]);
      if (curX < x && maps[curY][curX + 1] === 1) queue.push([curY, curX + 1]);
      if (curY > 0 && maps[curY - 1][curX] === 1) queue.push([curY - 1, curX]);
      if (curX > 0 && maps[curY][curX - 1] === 1) queue.push([curY, curX - 1]);
    }
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

//참고
// function solution(maps) {
//   let answer = 1;
//   let visited = maps;
//   let queue = [];
//   const dx = [-1, 1, 0, 0];
//   const dy = [0, 0, -1, 1];
//   const n = maps.length;
//   const m = maps[0].length;

//   queue.push([0, 0]);
//   visited[0][0] = 0;

//   while (queue.length > 0) {
//     let size = queue.length;

//     for (let i = 0; i < size; i++) {
//       let [x, y] = queue.shift();

//       for (let j = 0; j < 4; j++) {
//         let nx = x + dx[j];
//         let ny = y + dy[j];

//         if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
//           if (nx == n - 1 && ny == m - 1) {
//             return ++answer;
//           }
//           queue.push([nx, ny]);
//           visited[nx][ny] = 0;
//         }
//       }
//     }
//     answer++;
//   }

//   return -1;
// }
[
  [0, "y", "y", "y", "y", "y"],
  [0, "y", "x", "x", "x", "y"],
  [0, "y", "x", "x", "x", "y"],
  [0, "y", "x", "x", "x", "y"],
  [0, "y", "x", "x", "x", "y"],
  [0, "y", "x", "x", "x", "y"],
  [0, "y", "y", "y", "y", "y"],
  [0, 0, 0, 0, 0, 0],
];
[
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 6, 7, 0, 0],
  [0, 0, 4, 5, 6, 7, 0],
  [0, 2, 3, 0, 0, 8, 9],
  [0, 1, 2, 0, 0, 7, 8],
  [0, 0, 3, 4, 5, 6, 0],
  [0, 0, 0, 5, 6, 0, 0],
];