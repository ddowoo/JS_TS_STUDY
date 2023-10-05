function solution(clothes) {
  const Hash = {};
  let answer = 1;
  for (let i = 0; i < clothes.length; i++) {
    const type = clothes[i][1];
    const value = Hash[type] ?? 1;
    Hash[type] = value + 1;
  }

  for (let key in Hash) {
    answer *= Hash[key];
  }

  return answer - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);

var result = realm.objects("Memo").sorted("isFavorites", true).sorted("favoritesDatetime", true).sorted("editDatetime", true);

if (result.length == 1) {
  const emptyMemo = await realm.create("Memo", {
    id: 0,
    type: "TEMP", //TEXT, APP_LINK, URL_LINK, CALL, MESSAGE, (NAVIGATION, MAP),
    regDatetime: "2022-12-28 13:12:00",
    editDatetime: "2022-12-28 13:12:00",
    favoritesDatetime: "",
    isFavorites: false,
    title: "",
    tel: "",
    content: "",
  });

  const _result = [...result, ...emptyMemo];
  setMemos(_result);
} else {
  setMemos(result);
}
console.log(memos);
