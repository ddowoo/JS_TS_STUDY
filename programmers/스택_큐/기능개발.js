function solution(progresses, speeds) {
  const answer = [];
  while (progresses.length > 0) {
    const complete = [];
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) progresses[i] += speeds[i];
    }

    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] >= 100) {
        if (i === 0 || complete.indexOf(i - 1) !== -1) {
          complete.push(i);
        }
      }
    }

    if (complete.length !== 0) {
      answer.push(complete.length);
      progresses.splice(0, complete.length);
      speeds.splice(0, complete.length);
    }
  }

  return answer;
}

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
// solution([93, 30, 55], [1, 30, 5]);
