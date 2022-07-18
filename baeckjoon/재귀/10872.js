// const input = Number(require("fs").readFileSync(0).toString().trim());
const input = 3;
let answer = 1;

const getF = (num) => {
  if (num === 0) return console.log(1);
  answer = answer * num;

  return num === 1 ? console.log(answer) : getF(num - 1);
};

getF(input);
