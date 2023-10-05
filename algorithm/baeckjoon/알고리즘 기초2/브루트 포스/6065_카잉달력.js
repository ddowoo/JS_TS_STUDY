/**
 * 모듈러 연상 관련 학습하기
 */

const inputs = `15
40000 39999 39999 39998
40000 39999 40000 39999
40000 40000 40000 39999
40000 39998 40000 39997
39999 2 39998 2
3 40000 3 39999
40000 3 40000 3
8 2 4 2
10 12 2 12
12 10 12 10
12 10 1 1
12 6 12 6
10 1 5 1
1 10 1 5
1 1 1 1`
  .toString()
  .trim()
  .split("\n");
// var fs = require("fs");
// var inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answers = [];

inputs.shift();

const gcd = (a, b) => {
  if (b === 0) return a;
  return a > b ? gcd(b, a % b) : gcd(a, b % a);
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const solution = (nums) => {
  const [M, N, x, y] = nums;
  const limit = lcm(M, N);
  let year = x;

  while (year <= limit) {
    if (((year - 1) % N) + 1 === y) {
      return year;
    }
    year += M;
  }

  return -1; // 목표 해를 찾을 수 없는 경우
};

inputs.forEach((strs) => {
  const nums = strs.split(" ").map((n) => Number(n));
  console.log(solution(nums));
});
