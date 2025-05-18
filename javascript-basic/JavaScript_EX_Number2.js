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