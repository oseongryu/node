// 파일을 실행하면 node 1.js
// 출력으로 아래와 같이 나오도록 reduce를 사용해서 완성하시오.

// 출력값(number의 합) { number : 23  }
const programming = [
  { name: "python", number: 2 },
  { name: "nodejs", number: 1 },
  { name: "java", number: 20 }
];

// console.log(
//   // 작성해주세요
//   programming.reduce((accumulator, currentValue) => {
//     accumulator.number += currentValue.number;
//     return accumulator;
//   }, { number: 0 })
// );

console.log(
  programming.reduce((acc, current) => ({
    number: acc.number + current.number
  }))
);