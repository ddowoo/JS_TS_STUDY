function solution(brown, yellow) {
  let answer;
  const total = brown + yellow;
  const divisorList = [];

  let divisior = 1;

  while (divisior <= total) {
    if (total % divisior === 0) divisorList.push(divisior);
    divisior++;
  }

  for (let i = 0; i < Math.ceil(divisorList.length / 2); i++) {
    const tempYellow = divisorList[i];
    const tempBrown = total / tempYellow;

    if ((tempYellow - 2) * (tempBrown - 2) === yellow) answer = [tempBrown, tempYellow];
  }

  console.log(answer);
}

// 약수 다 할 필요 없음
//

solution(8, 1);

//  개선된 코드
function solution(brown, yellow) {
  for (let width = 1; width <= yellow; width++) {
    if (yellow % width === 0) {
      const height = yellow / width;
      const totalBrown = 2 * (width + height) + 4; // 갈색 격자 수 계산

      if (totalBrown === brown) {
        // 조건을 만족하는 경우
        return [Math.max(width, height) + 2, Math.min(width, height) + 2];
      }
    }
  }
}
