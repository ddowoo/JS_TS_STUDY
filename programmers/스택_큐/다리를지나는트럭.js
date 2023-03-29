function solution(bridge_length, weight, truck_weights) {
  let seconds = 0;

  const trucks = [...truck_weights];
  const passing = [];
  let passingTrucksLength = [];
  const goal = [];
  console.log(truck_weights);
  console.log(goal);

  while (goal.length !== truck_weights.length) {
    console.log("-----------------");
    seconds++;
    console.log("seconds :  ", seconds);
    //   지나가는 트럭들의 위치를 하나씩 전진
    passingTrucksLength = passingTrucksLength.map((prev) => prev + 1);

    // 지나가는 첫번째 트럭이 다 지났는지 확인
    if (passingTrucksLength[0] > bridge_length) {
      passingTrucksLength.shift();
      const goalTruck = passing.shift();
      goal.push(goalTruck);
    }

    //   다리위 총 트럭의 무게
    const weightOnBirdge = passing.reduce((acc, cur, idx) => {
      return acc + cur;
    }, 0);

    if (trucks.length > 0 && weightOnBirdge + trucks[0] <= weight) {
      const firstTruck = trucks.shift();
      passing.push(firstTruck);
      passingTrucksLength.push(1);
    }

    console.log("passingTrucksLength : ", passingTrucksLength);
    console.log("weightOnBirdge : ", weightOnBirdge);
    console.log("trucks : ", trucks);
    console.log("passing : ", passing);
    console.log("seconds : ", seconds);
    console.log("gaol : ", goal);
  }

  //   console.log(goal);
  console.log("정답 : ", seconds);
  return seconds;
}

solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
