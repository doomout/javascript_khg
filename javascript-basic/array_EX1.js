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

// 2. 배열 자르고 합치기

// 형식: slice(<시작 인덱스>, <종료 인덱스>)
const target3 = ['가', '나', '다', '라', '마'];
// 1~4 까지 자르기
const result6 = target3.slice(1, 4);
console.log(result6); // ['나', '다', '라']
// 2~ 끝까지 자르기
const result7 = target3.slice(2);
console.log(result7); // ['다', '라', '마']
// -2 부터 끝까지 자르기
const result8 = target3.slice(-2);
console.log(result8); // ['라', '마']

// 3. 두 배열을 합쳐서 새로운 배열 만들기

const target4 = ['가', '나', '다'];
const target5 = ['라', '마'];
const result9 = target4.concat(target5);
console.log(result9); // ['가', '나', '다', '라', '마']

// 4. 배열과 비슷한 문자열의 특징
// 문자열[자릿수]
console.log('hello'[0]); // 'h'
// 문자열.length
console.log('hello'.length); // 5
console.log('hello'.length - 1); // 4
console.log('hello'.at(-1)); // 'o'

console.log('2345'.indexOf(3) === 1); // true 
console.log('2345'.indexOf(6) === -1); // true
console.log('2345'.includes(3) === true); // true 

//배열 -> 문자열
// join() 메서드는 배열의 모든 요소를 연결하여 문자열로 반환합니다.
const target6 = ['가', '나', '다', '라', '마']; 
const result10 = target6.join('');
console.log(result10); // '가나다라마'  
const result11 = target6.join(' - ');
console.log(result11); // '가 - 나 - 다 - 라 - 마'
const result12 = target6.join(' ');
console.log(result12); // '가 나 다 라 마'

//문자열 -> 배열
// split() 메서드는 문자열을 지정된 구분자를 기준으로 나누어 배열로 반환합니다. 
console.log('2345'.split()); // ['2345']
console.log('2345'.split('x')); // ['2345']
console.log('2345'.split('')); // ['2', '3', '4', '5']
console.log('2,3,4,5'.split()); // ['2,3,4,5']
console.log('2,3,4,5'.split(',')); // ['2', '3', '4', '5']

// slice() 메서드는 문자열의 일부를 잘라내어 새로운 배열을 반환합니다.
console.log('2345'.slice(1, 3)); // '23'
console.log('2345'.slice(1, -1)); // '34'
console.log('2345'.slice(1)); // '345'

// concat() 메서드는 두 개 이상의 문자열을 연결하여 새로운 문자열을 반환합니다. 
console.log('23'.concat('45')); // '2345'
console.log('23'.concat('4', '5')); // '2345'

// concat()에 배열을 넣으면  join()이 적용되어 문자열로 바뀐 뒤 문자열과 합쳐진다.
console.log('23'.concat(['4', '5'])); // '234,5' 