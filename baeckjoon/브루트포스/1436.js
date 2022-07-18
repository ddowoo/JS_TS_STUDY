const input = Number(require("fs").readFileSync(0).toString().trim());
const str = "666";

const getEnd = (n) => {
  let count = 0;
  let now = 1;

  while (count < n) {
    if (now.toString().indexOf(str) !== -1) {
      count++;
    }
    now++;
  }

  console.log(now - 1);
};

getEnd(1);
