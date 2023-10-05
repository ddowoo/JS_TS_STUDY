// function solution(phone_book) {
//   const sorted_phone_book = phone_book.sort((a, b) => Number(a) - Number(b));

//   for (let i = 0; i < sorted_phone_book.length; i++) {
//     for (let j = i + 1; j < sorted_phone_book.length; j++) {
//       const a = sorted_phone_book[i];
//       const b = sorted_phone_book[j];
//       console.log("a : ", a, "b : ", b);
//       if (b.startsWith(a)) return console.log(false);
//     }
//   }
//   return console.log(true);
// }

// function solution(phone_book) {
//   const phoneBookMap = {};

//   // 해시 맵에 전화번호를 키로 저장
//   for (const phoneNumber of phone_book) phoneBookMap[phoneNumber] = true;

//   for (const phoneNumber of phone_book) {
//     for (let i = 1; i < phoneNumber.length; i++) {
//       const prefix = phoneNumber.substring(0, i);
//       if (phoneBookMap[prefix]) return false;
//     }
//   }

//   return true;
// }

function solution(phoneBook) {
  return !phoneBook.sort().some((t, i) => {
    if (i === phoneBook.length - 1) return false;

    return phoneBook[i + 1].startsWith(phoneBook[i]);
  });
}

solution(["119", "97674223", "1195524421"]);

// 주어진 코드의 문제점:

// 먼저, 주어진 코드에서는 배열을 정렬하는데 O(n log n)의 시간 복잡도가 소요됩니다.
// 그 다음에는 중첩된 루프가 사용되어, 모든 전화번호 쌍에 대해 startsWith 메서드로 접두어 여부를 확인합니다. 이 때, O(n^2)의 시간 복잡도가 발생합니다.
// 반면, 제가 제시한 코드에서는:

// 전화번호를 해시 맵에 저장하는데 O(n)의 시간 복잡도가 소요됩니다.
// 그런 다음 모든 전화번호에 대해 한 번의 루프를 돌며 부분 문자열을 검사합니다. 이 때, 한 번의 루프로 모든 접두어를 검사하므로 O(n)의 시간 복잡도가 발생합니다.
