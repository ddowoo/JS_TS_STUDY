function convertToArray<T>(input: T): T[] {
  return [input];
}

convertToArray("album");
convertToArray(5);
// ----------------------------------------------------------------------------
// findIndex vs indexOf
// 배열내 값이 객체인 경우 findIndex를 이용해 찾을 수 있음
// 두 메서드 모두 선형 검색 알고리즘으 사용하기 때문에 목표한 값을 찾으면 검색을 중단한다 (성능차이 없음)
function getIndexOfArrayItem<T>(array: T[], arrayItem: T) {
  return array.findIndex((item) => item === arrayItem);
}

const ar = [55, 22, 11];
getIndexOfArrayItem(ar, 11);

// ----------------------------------------------------------------------------
function createArrayPair<T, K>(input1: T, input2: K): [T, K] {
  return [input1, input2];
}

createArrayPair("hello", 1);

// ----------------------------------------------------------------------------
//
type themeOptions<T> = {
  themeOptions: T[];
  selectedTheme: T;
};

function selectOptionFromThemes<T>({ themeOptions, selectedTheme }: themeOptions<T>) {}

// ----------------------------------------------------------------------------
// Generic Type 제한 extens활용
function createArrayPair2<T extends number | string, K>(input1: T, input2: K): [T, K] {
  return [input1, input2];
}

createArrayPair2(false, 1);
