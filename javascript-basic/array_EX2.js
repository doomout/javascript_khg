// 1. 배열 반복하기
const target = ['가', '나', '다', '라', '마'];
let i = 0;
while (i < target.length) {
  console.log(target[i]);
  i++;
}

for (let j = 0; j < target.length; j++) {
  console.log(target[j]);
}

// 2. 2차원 배열
// 배열의 요소로 배열이 들어 있으면 이차원 배열이라고 한다.
const twoDimension = [
    [1, 2, 3], 
    [4, 5, 6],
];

for(let k = 0; k < twoDimension.length; k++) {
  for (let l = 0; l < twoDimension[k].length; l++) {
    console.log(twoDimension[k][l]);
  }
}

// 3. flat()와 fill()
// flat()은 배열의 차원을 한 단계 낮추는 기능
const array = [[1,2,3], [4,5,6], [7,8,9]];
console.log(array.flat()); 
/* 실행 결과
[
  1, 2, 3, 4, 5, 6, 7, 8, 9
]
*/
// 5의 길이의 빈 배열 생성
const empty = Array(5);
// fill()은 배열의 모든 요소를 지정한 값으로 채우는 기능
console.log(empty.fill());  // [ undefined, undefined, undefined, undefined, undefined ]
// fill()에 값을 넣으면 해당 값으로 채워진다.
console.log(empty.fill(1)); // [ 1, 1, 1, 1, 1 ]
