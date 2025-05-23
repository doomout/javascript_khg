// 1.배열에서 요소 찾기
// includes() 메서드는 배열에 특정 요소가 포함되어 있는지 확인하고, 포함되어 있으면 true를 반환합니다.
const target =['가', '나', '다', '라', '마'];
const result = target.includes('다');
console.log(result); // true
const result2 = target.includes('카');
console.log(result2); // false

// indexOf() 메서드는 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 요소가 없으면 -1을 반환합니다.
const target2 = ['라', '나', '다', '라', '다'];
const result3 = target2.indexOf('다');
console.log(result3); // 2

// lastIndexOf() 메서드는 배열에서 특정 요소의 마지막 인덱스를 반환합니다.
const result4 = target2.lastIndexOf('라');
console.log(result4); // 3

// indexOf() 메서드는 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다.
// 만약 배열에 해당 요소가 없다면 -1을 반환합니다.
const result5 = target2.indexOf('가');
console.log(result5); // -1 