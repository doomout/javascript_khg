//객체 중 하나인 배열 예제

// 배열은 여러 개의 값을 하나의 변수에 저장할 수 있는 자료구조
const apple = '사과';
const orange = '오렌지';
const pear = '배';
const strawberry = '딸기';

// 위의 변수를 배열로 묶기
// 배열은 대괄호([])로 감싸고, 각 요소는 쉼표(,)로 구분
const fruits = [apple, orange, pear, strawberry]; //배열 생성
console.log(fruits); // ['사과', '오렌지', '배', '딸기']
console.log(fruits[0]); // '사과' - 배열의 첫 번째 요소
console.log(fruits[1]); // '오렌지' - 배열의 두 번째 요소   
console.log(fruits[2]); // '배' - 배열의 세 번째 요소
console.log(fruits[3]); // '딸기' - 배열의 네 번째 요소

// 배열 안에 다른 배열이나 변수를 넣을 수도 있다.
const arrayOfArray = [[1,2,3], [4,5]];
console.log(arrayOfArray); // [[1, 2, 3], [4, 5]]
console.log(arrayOfArray[0]); // [1, 2, 3] - 배열의 첫 번째 요소

const a = 10;
const b = 20;
const variableArray = [a, b, 30];
console.log(variableArray); // [10, 20, 30]
console.log(variableArray[1]); // 20 - 배열의 두 번째 요소

// 배열의 요소 개수 구하기
const everything = ['사과', 1, undefined, true, '배열', null];
console.log(everything.length); // 6 - 배열의 요소 개수

// 빈 값도 유효한 값이므로 요소 개수를 셀 때 포함
const emptyArray = [null, undefined, false, '', NaN];
console.log(emptyArray.length); // 5 - 배열의 요소 개수

// at() 메서드
// at(4) - 배열의 4번째 요소를 가져옴
// at(-1) - 배열의 마지막 요소를 가져옴 
const findLastElement = ['a', 'b', 'c', 'd', 'e'];
console.log(findLastElement.at(4)); // 'e' - 배열의 마지막 요소
console.log(findLastElement.at(-1)); // 'e' - 배열의 마지막 요소

// 배열에 요소 추가하기
// 배열에 요소 추가할 때는 배열의 인덱스에 값을 대입하면 된다.
const target = ['a', 'b', 'c', 'd', 'e'];
target[5] = 'f'; // 배열의 6번째 요소에 'f' 추가
console.log(target); // ['a', 'b', 'c', 'd', 'e', 'f'] - 배열에 'f' 추가됨
target[target.length] = 'g'; // 배열의 마지막 요소에 'g' 추가
console.log(target); // ['a', 'b', 'c', 'd', 'e', 'f', 'g'] - 배열에 'g' 추가됨

// 배열의 맨 앞에 요소 추가하기
// unshift() 메서드를 사용하여 배열의 맨 앞에 요소를 추가할 수 있다.
const target2 = ['나', '다', '라', '마', '바'];
target2.unshift('가'); // 배열의 맨 앞에 '가' 추가
console.log(target2); // ['가', '나', '다', '라', '마', '바'] - 배열의 맨 앞에 '가' 추가됨

// 배열의 맨 뒤에 요소 추가하기
// push() 메서드를 사용하여 배열의 맨 뒤에 요소를 추가할 수 있다.
const target3 = ['가', '나', '다', '라', '마'];
target3.push('바'); // 배열의 맨 뒤에 '바' 추가
console.log(target3); // ['가', '나', '다', '라', '마', '바'] - 배열의 맨 뒤에 '바' 추가됨
