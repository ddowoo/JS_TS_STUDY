
// const ageList = {};

// let proxyAgeList = new Proxy(ageList, {
//   /**
//    * get 프로퍼티를 읽을때 작동
//    * @param {*} target 동작을 전달할 객체
//    * @param {*} prop 프로퍼티 이름
//    */
//   get: (target, prop) => {
//     if (prop in target) {
//       return target[prop];
//     } else {
//       return "존재하지 않는 유저입니다.";
//     }
//   },
//   /**
//    * @description set 사용예시
//    * @param {*} obj 동작을 전달할 객체
//    * @param {*} prop 프로퍼티 키
//    * @param {*} value 프로퍼티 값
//    * @returns
//    */
//   set: (obj, prop, value) => {
//     console.log("obj :", obj);
//     console.log("prop : ", prop);
//     console.log("value : ", value);

//     if (typeof value === "number") {
//       obj[prop] = value;
//       return true;
//     } else {
//       return false;
//     }
//   },
// });

// proxyAgeList.ddowoo = 5;
// console.log(ageList.ddowooT);
// console.log(proxyAgeList.ddowooT);
// console.log("-------------------");