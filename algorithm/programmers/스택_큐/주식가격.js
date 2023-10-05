function solution(prices) {
  var answer = [];

  prices.forEach((element, index, arr) => {
    let count = 0;
    for (let i = index + 1; i < prices.length; i++) {
      console.log("i : ", i);
      if (element <= arr[i]) count++;
    }
    answer.push(count);
  });

  console.log(answer);
}

solution([2, 2, 3, 1, 5]);
// [1,2,3,2,1,] => [4,3,1,1,0]
// [5,4,3,2,5] => [1,1,1,1,0]
// [1, 2, 3, 4, 5, 6, 1, 1, 2, 3, 1, 2, 3]
// [12, 5, 4, 3, 2, 1, 6, 5, 2, 1, 2, 1, 0]
//[1, 2, 3, 4, 1] // [4, 3, 2, 1, 0]
//[5, 4, 3, 2, 5] // [1, 1, 1, 1, 0]
//[1, 2, 3, 2, 3, 1] // [5, 4, 1, 2, 1, 0]
