const numbers = "011";

function solution(numbers) {
  let answer = [];
  const _numbers = numbers.split("");

  const checkIsPrime = (num) => {
    let count = 0;
    let i = 2;
    if (num <= 1) return false;
    while (i <= Math.sqrt(num)) {
      if (num % i === 0) count++;
      i++;
    }
    return count === 0;
  };

  const makeCardComb = (arr, prevNum) => {
    arr.forEach((card, index) => {
      const newNum = prevNum + card;
      const _arr = [...arr];
      _arr.splice(index, 1);
      if (checkIsPrime(Number(newNum)) && !answer.includes(Number(newNum))) answer.push(Number(newNum));

      if (arr.length >= 1) makeCardComb(_arr, newNum);
    });
  };

  makeCardComb(_numbers, "");
  console.log(answer);
}

solution(numbers);
