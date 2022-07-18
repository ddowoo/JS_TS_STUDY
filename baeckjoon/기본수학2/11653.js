const getNum = (num) => {
  let now = num;
  let target = 2;

  while (now !== 1) {
    if (now % target === 0) {
      now = now / target;
      console.log(target);
    } else {
      target++;
    }
  }
};

getNum(9991);
