// 자바 스크립트 산술 연산자 예제

console.log('산술 연산자'); 
console.log(1 + 2); // 덧셈 3
console.log(1 - 2); // 뺄셈 -1
console.log(1 * 2); // 곱셈 2
console.log(1 / 2); // 나눗셈 0.5
console.log(6 % 4); // 나머지 2
console.log(2 ** 4); // 제곱 16

console.log('무한대');
console.log(2 / 0); // 무한대 Infinity
console.log(-2 / 0); // 무한대 -Infinity 
console.log(0 / 0); // NaN
console.log(Infinity - Infinity); // NaN

console.log('문자열 + 숫자는 문자로 변환되어 합쳐진다.');  
console.log('문자열' + 0);  // 문자열0 
console.log(typeof('문자열' + 0));  // string

console.log('문자가 숫자로 형변환 되지 못하면 연산시 NaN이 된다.');
console.log('문자열' - 0);   // NaN
console.log(typeof('문자열' - 0)); // number

console.log('숫자로 형변환이 가능하면 연산이 된다.');
console.log('5' - 2); // 3
console.log(typeof('5' - 2)); // number

console.log('실수 연산시 주의점: 그냥 연산시 오차가 발생');
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
console.log('그래서 실수를 정수로 바꾸고 연산 후 다시 실수로 바꿈'); 
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

console.log('boolean 연산자');
console.log(true); // true
console.log(false); // false
console.log(typeof(true)); // boolean

console.log('비교 연산자');
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 3); // true    
console.log(5 <= 3); // false
console.log(5 == 3); // false
console.log(5 != 3); // true

console.log('불 값 끼리 비교(true는 1, false은 0으로 변환되어 비교)');
console.log(true > true); // true
console.log(true < true); // false

console.log('비교할 때 유일하게 false 가 나오는 비교 NaN 비교'); // false
console.log(NaN == NaN); // false

console.log('==는 값만 비교, ===는 값과 타입을 비교');
console.log(5 === 3); // false
console.log(5 !== 3); // true