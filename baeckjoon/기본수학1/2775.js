// es6 2차원 배열 생성방법
// 2차원 데이터의 y축은 1차원 배열의 길이가 된다.
// x축은 2차원 배열의 길이가 된다.
const inputs = `2
1
3
2
3`.split("\n");
// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
inputs.shift();

const getPeople = (floor, room) => {
  const apartment = new Array(floor);

  for (let i = 0; i <= floor; i++) {
    apartment[i] = new Array(room).fill(0);
  }
  for (let i = 0; i < room; i++) {
    apartment[0][i] = i + 1;
  }

  for (let i = 0; i <= floor; i++) {
    apartment[i][0] = 1;
  }

  for (let i = 1; i <= floor; i++) {
    for (let j = 1; j < room; j++) {
      apartment[i][j] = apartment[i][j - 1] + apartment[i - 1][j];
    }
  }

  console.log(apartment[floor][room - 1]);
};

for (let i = 0; i < inputs.length; i += 2) {
  getPeople(inputs[i], inputs[i + 1]);
}
