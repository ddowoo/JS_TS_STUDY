// const ageList = {};

// let proxyAgeList = new Proxy(ageList, {});

// proxyAgeList.ddowoo = "10";

// console.log(ageList);
// console.log(proxyAgeList);
//----------------------------------
//----------------------------------

// //get
// const ageList = {};

// let proxyAgeList = new Proxy(ageList, {
//   /**
//    * get 프로퍼티를 읽을때 작동
//    * @param {*} target 동작을 전달할 객체
//    * @param {*} prop 프로퍼티 이름
//    */
//   get: (obj, prop) => {
//     console.log("obj :", obj);
//     console.log("prop : ", prop);

//     if (prop in obj) {
//       return obj[prop];
//     } else {
//       return "존재하지 않는 유저입니다.";
//     }
//   },
// });
// // obj: {}
// // prop: ddowoo;
// console.log(ageList.ddowoo);
// console.log(proxyAgeList.ddowoo);

//--------------------
// set

// const ageList = {};

// let proxyAgeList = new Proxy(ageList, {

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

// proxyAgeList.ddowoo = "5";
// console.log("---------");
// console.log(ageList.ddowoo);
// console.log(proxyAgeList.ddowoo);

// proxyAgeList.ddowoo = 5;
// console.log("---------");
// console.log(ageList.ddowoot);
// console.log(proxyAgeList.ddowoot);

//--------------------
// delete

// const ageList = {
//   ddowoo: 10,
//   dong: 10,
// };

// let proxyAgeList = new Proxy(ageList, {
//   /**
//    *
//    * @param {*} 동작을 전달할 객체
//    * @param {*} 프로퍼티 키
//    */
//   deleteProperty: (obj, prop) => {
//     if (prop === "ddowoo") {
//       return false;
//     } else {
//       delete obj[prop];
//       return true;
//     }
//   },
// });

// delete proxyAgeList.ddowoo;
// delete proxyAgeList.dong;

// console.log(proxyAgeList.ddowoo);
// console.log(proxyAgeList.dong);

//----------------------------------------
// has

// const ageList = {
//   _ddowoo: 10,
//   ddowoo: 10,
// };

// let proxyAgeList = new Proxy(ageList, {
//   has: (obj, prop) => {
//     if (prop.startsWith("_")) {
//       return false;
//     } else {
//       return obj.hasOwnProperty(prop);
//     }
//   },
// });

// console.log("_ddowoo" in proxyAgeList);
// console.log("ddowoo" in proxyAgeList);

//----------------------------------------
// apply
// 원본 함수
// function tellAge(age) {
//   return `나이는 ${age}살 입니다.`;
// }

// // Proxy 객체 생성
// const tellAgeProxy = new Proxy(tellAge, {
//   apply: function (target, thisArg, argumentsList) {
//     return `만나이는 ${argumentsList[0] - 2}살 입니다.`;
//   },
// });

// // Proxy를 사용하여 함수 호출
// const result1 = tellAge(10);
// const result2 = tellAgeProxy(10);

// console.log(result1);
// console.log(result2);

//------------------------------------------

// const ageList = {
//     ddowoo: 10,
//     printAge:
// };

// let proxyAgeList = new Proxy(ageList, {
//   has: (obj, prop) => {
//     if (prop.startsWith("_")) {
//       return false;
//     } else {
//       return obj.hasOwnProperty(prop);
//     }
//   },
// });

// console.log("_ddowoo" in proxyAgeList);
// console.log("ddowoo" in proxyAgeList);
// const ageList = { ddowoo: 10 };

// console.log(Reflect.has(ageList, "ddowoo")); // true

const ageList = {};

let proxyAgeList = new Proxy(ageList, {
  get: (obj, prop) => {
    if (Reflect.has(obj, prop)) {
      return Reflect.get(obj, prop);
    } else {
      return "존재하지 않는 유저입니다.";
    }
  },
  set: (obj, prop, value) => {
    if (typeof value === "number") {
      return Reflect.set(obj, prop, value); // 리턴값으로 true
    } else {
      return false;
    }
  },
});

proxyAgeList.ddowoo = 10;
console.log(ageList);
console.log(proxyAgeList);

console.log(ageList.ddowoo);
console.log(proxyAgeList.ddowoo);

console.log(ageList.John);
console.log(proxyAgeList.John);
