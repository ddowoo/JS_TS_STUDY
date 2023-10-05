// const second = ["000", "001", "010", "011", "100", "101", "110", "111"];

// // const input = require("fs")
// //   .readFileSync(0)
// //   .toString()
// //   .trim()
// //   .split("")
// //   .map((num) => second[Number(num)])
// //   .join("");

// const input = "100"
//   .trim()
//   .split("")
//   .map((num) => {
//     return second[Number(num)];
//   })
//   .join("");

// console.log(Number(input).toString());
const printIndex = async (index) => {
  const _index = setTimeout(() => index, 100);
  return _index;
};
const mapArr = Promise.all(
  [...new Array(5)].map((_, index) => {
    return printIndex(index);
  })
);
console.log(mapArr);
