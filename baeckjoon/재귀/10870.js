const input = Number(require("fs").readFileSync(0).toString().trim());
const f = [0, 1];

const getF = (n) => {
  if (f[n] !== undefined) {
    console.log(f[n]);
  } else {
    f[f.length] = f[f.length - 1] + f[f.length - 2];
    getF(n);
  }
};

getF(input);
