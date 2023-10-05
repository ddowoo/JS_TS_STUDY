// function solution(number, k) {
//   const numArr = number.toString().split("");
//   const answer = [];
//   const digit = numArr.length - k;

//   while (answer.length < digit) {
//     const _numArr = [...numArr];

//     for (let i = 1; i < digit - answer.length; i++) _numArr.pop();

//     const max = Math.max(..._numArr);
//     const delIndex = numArr.indexOf(max.toString());
//     for (let i = 0; i <= delIndex; i++) numArr.shift();

//     answer.push(max);
//   }
//   console.log(Number(answer.join("")));
// }
// solution(1231234, 3);

// 주어진 문제를 풀기 위한 방법으로서 여러 접근 방식이 있을 수 있지만, 제시된 코드는 목표를 달성하는 데 비효율적일 수 있습니다. 코드를 분석해보겠습니다.

// 주어진 숫자를 문자열로 변환한 뒤 배열로 분할합니다.
// 목표로 하는 결과 숫자의 자릿수(digit)를 계산합니다.
// while 루프를 사용하여 결과 배열(answer)을 구성합니다.
// 현재 남은 자릿수(digit - answer.length)에 따라 숫자 배열에서 일부를 제거하여 가장 큰 숫자를 찾습니다.
// 가장 큰 숫자를 찾고 해당 숫자의 인덱스를 찾아서 이전 숫자 배열에서 제거합니다.
// 이 코드는 기본적으로 동작하지만, 몇 가지 개선할 점이 있습니다:

// 배열에서 요소를 제거할 때, shift() 메서드를 사용하는 것은 매우 비효율적입니다.
// shift()를 호출하면 배열의 모든 요소가 한 칸씩 이동해야 하므로 시간 복잡도가 높아집니다.

// 루프를 여러 번 중첩하여 사용하고 있으므로 코드가 복잡해집니다.

// 대체로 코드가 가독성이 떨어지며, 성능 면에서도 최적화되지 않았습니다.

// 더 효율적인 방법은 다음과 같습니다

// -----------------------------------
// 채워진 배열은 꼈다 뺐다 하는건 성능이 안좋음

function solution(number, k) {
  const stack = [];

  for (let digit of number.toString()) {
    console.log("stack length -1 : ", stack[stack.length - 1]);
    //   stack에 들어갈 숫자가
    // 어차피 앞대가리 큰게 중요함
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < digit) {
      console.log("pop");
      console.log("k : ", k); // 빼야하는 자릿수
      stack.pop(); // 뺌
      k--; // k-1만큼 빼야함
    }
    stack.push(digit);
    console.log("stack : ", stack);
  }
  console.log("------------------------");
  console.log("stack : ", stack);
  // 남은 k가 0보다 큰 경우, 뒷 자리부터 제거합니다.
  while (k > 0) {
    stack.pop();
    k--;
  }

  return stack.join("");
}

solution(4132252841, 4);
