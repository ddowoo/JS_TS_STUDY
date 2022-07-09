// es6 2차원 배열 생성방법

const getPeople = (floor, room) => {
  const apartment = new Array(floor);

  for (let i = 0; i < room; i++) {
    apartment[i] = new Array(room);
  }

  for (let i = 1; i <= room; i++) {
    apartment[0][i] = i + 1;
  }

  for (let i = 0; i <= floor; i++) {
    apartment[i][0] = 1;
  }

  for (let i = 1; i <= floor; i++) {
    for (let j = 1; j <= room; j++) {
      apartment[i][j] = apartment[i][j - 1] + apartment[i - 1][j];
    }
  }

  console.log(apartment);
  console.log(apartment[floor][room - 1]);
};

getPeople(1, 3);
