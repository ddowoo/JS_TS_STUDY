let kg = 9;
let five = 0;
let three = 0;

while (true) {
  if (kg < 0) {
    console.log(-1);
    break;
  }
  if (kg % 5 === 0) {
    const answer = three + kg / 5;
    console.log(answer);
    break;
  } else {
    kg -= 3;
    three++;
  }
}
