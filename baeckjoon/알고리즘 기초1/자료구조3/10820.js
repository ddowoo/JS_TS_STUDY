const input = `This is String
SPACE    1    SPACE
 S a M p L e I n P u T     
0L1A2S3T4L5I6N7E8`
  .toString()
  .trim()
  .split("\n");

// const input = require("fs").readFileSync(0).toString().trim().split("\n");

const answer = [];
input.forEach((sentence) => {
  if (sentence === "") return;
  const _sentence = [0, 0, 0, 0];
  sentence.split("").forEach((word) => {
    const _word = word.charCodeAt(0);

    if (_word >= 97 && _word <= 122) {
      _sentence[0] += 1;
    } else if (_word >= 65 && _word <= 90) {
      _sentence[1] += 1;
    } else if (word === " ") {
      _sentence[3] += 1;
    } else {
      _sentence[2] += 1;
    }
  });
  answer.push(_sentence.join(" "));
});

console.log(answer.join("\n"));
