// const input = require("fs").readFileSync(0).toString().trim().split(" ");
const input = "9223372036854775807 9223372036854775808".split(" ");
const a = BigInt(input[0]);
const b = BigInt(input[1]);
console.log((a + b).toString());
