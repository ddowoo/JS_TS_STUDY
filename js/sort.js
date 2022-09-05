let arr = [3, 30, 34, 5, 9];

arr = arr.map((num) => num.toString());

arr.sort((a, b) => {
  const _a = a + b;
  const _b = b + a;

  return Number(_b) - Number(_a);
});

console.log(arr.join(""));
// // 정확성 33 (나머지 tc 시간초과로 틀림 )

// const arr = [3, 30, 34, 5, 9];

// const answer = []

// arr.forEach((num) => {
//     if (i === 0) return answer.push(num)

//     while()

//  })
