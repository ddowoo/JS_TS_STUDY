const getComDivisor = (num) => {
  const divisor = [1];
  let index = 2;
  while (num !== 1) {
    if (num % index === 0) {
      num = num / index;
      divisor.push(index);
    } else {
      index++;
    }
  }
  return divisor;
};

// let number = Number(require("fs").readFileSync(0).toString().trim());
let number = 0;
if (number === 0) console.log(1);
else {
  let twoCount = 0;
  let fiveCount = 0;
  while (number >= 1) {
    const comDivisor = getComDivisor(number);
    comDivisor.forEach((num) => {
      if (num === 2) twoCount++;
      if (num === 5) fiveCount++;
    });
    number--;
  }

  console.log(Math.min(twoCount, fiveCount));
}
