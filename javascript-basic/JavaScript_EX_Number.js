//자바 스크립트 숫자 예제 모음

//지수 표기법
console.log(5e4); // 5 * 10000 = 50000 (+는 생략 가능)
console.log(5e+4); // 5 * 10000 = 50000
console.log(5e-3); // 5 * 1/1000  = 0.005

/* 위 코드 실행결과
50000
50000
0.005
*/

// 2진법(숫자0 소문자 b)
console.log(0b11); // 3

// 8진법(숫자 0 소문자 o)
console.log(0o15); // 13

// 16진법(숫자 0 소문자 x)
console.log(0x1c); // 28

// 문자열을 숫자로 변환
console.log(parseInt("123")); // 정수 123
console.log(typeof(parseInt("123"))); // number

console.log(Number("123")); // 문자 123
console.log(typeof(Number("123"))); // number

console.log(parseFloat("123.45")); // 실수 123.45
console.log(typeof(parseFloat("123.45"))); // number

console.log(Number("123.45")); // 문자 123.45
console.log(typeof(Number("123.45"))); // number

//주의점: Number()에 문자열을 넣으면 NaN이 나옴 (Not a Number)
console.log(Number("123abc")); // NaN
//막상 NaN을 확인해보면 숫자형으로 나옴
console.log(typeof(Number("123abc"))); // number

// 숫자를 문자열로 변환
console.log(String(123)); // 문자 "123"
console.log(typeof(String(123))); // string
console.log((123).toString()); // 문자 "123"
