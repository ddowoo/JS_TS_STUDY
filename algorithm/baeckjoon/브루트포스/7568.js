// const inputs = require("fs").readFileSync(0).toString().trim().split("\n");

const inputs = `4
6 10
4 2
6 4
10 6
`
  .toString()
  .trim()
  .split("\n");
inputs.shift();

const wh = inputs.map((data) => data.split(" ").map((el) => Number(el)));
const rank = [];
console.log(wh);
for (let i = 0; i < inputs.length; i++) {
  let ranking = 1;
  for (let j = 0; j < inputs.length; j++) {
    if (i != j && wh[i][0] < wh[j][0] && wh[i][1] < wh[j][1]) {
      ranking++;
    }
  }
  rank.push(ranking);
}

console.log(rank.join(" "));

// const rank = [];
// for (let i = 0; i < inputs.length; i++) {
//   let ranking = 0;
//   for (let j = 0; j < inputs.length; j++) {
//     if (i !== j && wh[i][0] < wh[j][0] && wh[i][1] < wh[j][1]) {
//       ranking++;
//     }
//   }
//   rank.push(ranking + 1);
// }

// console.log(rank.join(" "));

// const getTop = (arr) => {
//   const _arr = [...arr];
//   let top = [];
//   let top_height = 0;
//   let top_weight = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const person = arr[i].split(" ").map((data) => Number(data));
//     const _height = person[1];
//     const _weight = person[0];

//     if (_height >= top_height && _weight >= top_weight) {
//       top_height = _height;
//       top_weight = _weight;
//       top = [arr[i]];
//     } else if (_height < top_height && _weight < top_weight) {
//       continue;
//     } else {
//       top.push(arr[i]);
//     }
//   }

//   for (let i = 0; i < top.length; i++) {
//     _arr.splice(_arr.indexOf(top[i]), 1);
//   }

//   rank.push(top);

//   return _arr.length > 0 ? getTop(_arr) : console.log(rank);
// };

// getTop(inputs);

// const ranking = new Array(inputs.length).fill(0);

// let now = 1;

// for (let i = 0; i < rank.length; i++) {
//   for (let j = 0; j < rank[i].length; j++) {
//     const target = rank[i][j];
//     ranking[inputs.indexOf(target)] = now;
//     if (j + 1 === rank[i].length) {
//       now += rank[i].length;
//     }
//   }
// }

// console.log(ranking.join(" "));
