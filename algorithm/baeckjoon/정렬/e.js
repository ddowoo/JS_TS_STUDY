const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((previousValue, currentValue) => {
  console.log("previous value is " + previousValue);
  console.log("current Value is " + currentValue);

  return previousValue + currentValue;
}, initialValue);

console.log(sumWithInitial);
