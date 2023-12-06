// const inputs = `4
// 0 10 15 20
// 5 0 9 10
// 6 13 0 12
// 8 8 9 0`
//   .toString()
//     .split("\n");
const fs = require("fs");
const inputs = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const N = Number(inputs.shift());
const W = inputs.map((prices) => prices.split(" ").map(Number));

let minPrice = 100000000;
let cycle = 0;

const cityList = new Array(N).fill("").map((_, i) => i);
const calcPrice = (visitList) => {
  let price = 0;
  for (let i = 0; i < N; i++) {
    const fee = W[visitList[i]][visitList[i + 1]];
    cycle++;
    if (fee === 0 || price >= minPrice) {
      price = minPrice;
      break;
    } else {
      price += W[visitList[i]][visitList[i + 1]];
    }
  }
  return price;
};

const visit = (visitList, leftList) => {
  if (leftList.length === 0) {
    visitList.push(visitList[0]);
    const price = calcPrice(visitList);
    minPrice = Math.min(minPrice, price);
  } else {
    leftList.forEach((nextCity) => {
      const nextCityIndex = leftList.indexOf(nextCity);
      const _leftList = [...leftList];
      _leftList.splice(nextCityIndex, 1);

      const _visitList = [...visitList];
      _visitList.push(nextCity);
      visit(_visitList, _leftList);
    });
  }
};

cityList.forEach((city) => {
  const cityIndex = cityList.indexOf(city);
  const visitList = [city];
  const leftList = [...cityList];
  leftList.splice(cityIndex, 1);
  visit(visitList, leftList);
});

console.log(minPrice);
