const input = Number(require("fs").readFileSync(0).toString().trim());

const re = (target, now, isAsk) => {
  const dash = "____";
  let sumDash = "";
  let question = `"재귀함수가 뭔가요?"`;
  let one = `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`;
  let two = "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.";
  let three = `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;

  for (let i = 0; i < now; i++) {
    sumDash = sumDash + dash;
  }

  if (isAsk) {
    now === 0 && console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
    console.log(sumDash + question + "\n" + sumDash + one + "\n" + sumDash + two + "\n" + sumDash + three);
  } else {
    now === target && console.log(sumDash + question + "\n" + sumDash + `"재귀함수는 자기 자신을 호출하는 함수라네"`);
    console.log(sumDash + `라고 답변하였지.`);
  }
  if (isAsk) {
    return target - 1 > now ? re(target, now + 1, true) : re(target, now + 1, false);
  } else {
    return now !== 0 && re(target, now - 1, false);
  }
};

re(input, 0, true);
