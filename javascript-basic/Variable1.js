//변수 예제

// 1. 변수 선언
let string = "Hello, Variable!";
console.log(string); // Hello, Variable!

// 변수명에는 특수문자는 _와 $만 사용 가능, 숫자로 시작할 수 없음, 예약어도 불가능
// 유니코드까지도 변수명으로 사용 가능
let 한글 = "안녕하세요";
console.log(한글); // 안녕하세요

const value = "상수다";
console.log(value); // 상수다

//value = "변경"; // TypeError: Assignment to constant variable

// var 은 이제 안쓰는 추세다
// 기본적으로 const를 쓰고, 꼭 필요할 때만 let을 쓰는 패턴이 많다.