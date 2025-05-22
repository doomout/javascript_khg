//if 문
if (true){
    console.log("hi if~"); // true 이므로 실행됨
}
if (false){
    console.log("hi if~"); // false 이므로 실행되지 않음
}

let aaaa = true;
if (aaaa){
    console.log("hi if~"); // true 이므로 실행됨
}

if(0){
    console.log("hi if~"); // 0은 false 이므로 실행되지 않음
}

if(1){
    console.log("hi if~"); // 1은 true 이므로 실행됨
}       

//if else 문
let value = '사과';
let condition = false;
if (condition){
    value = '바나나';
} else {
    value = '체리';
}
console.log(value); // 체리

// if else if 문
const score = 90;
if (score >= 90) {
    console.log("A");
} else if (score < 90 && score >= 80) {
    console.log("B");
} else if (score < 80 && score >= 70) {
    console.log("C");
} else if (score < 70 && score >= 60) {
    console.log("D");
} else {
    console.log("F");
}
// A 출력

// 중첩 if 문
let first = true;
let second = false;
if (first) {
    console.log("첫 번째 조건 충족!");
    if (second) {
        console.log("두 번째 조건 충족!");
    } else {
        console.log("두 번째 조건 불충족!");
    }
} else {
    console.log("첫 번째 조건 불충족!");
}
/* 실행 결과
첫 번째 조건 충족!
두 번째 조건 불충족!
*/

// switch 문
let value1 = 'a';
switch (value1) {
    case 'a':
        console.log("a입니다.");
        console.log("A입니다.");
        break;
    case 'b':
        console.log("b입니다.");
        console.log("B입니다.");
        break;
    default:
        console.log("a도 b도 아닙니다.");
}

// switch 문 (default 가 앞으로 올 수도 있다)
let fruit = 'aaa';
switch (fruit) {
    default:
        console.log("과일이 아닙니다.");
        break;
    case '사과':
        console.log("사과입니다.");
        break;
    case '바나나':
        console.log("바나나입니다.");
        break;
    case '체리':
        console.log("체리입니다.");
        break;
}

// 조건부 연산자
let num = 10;
let result = (num > 5) ? "참이다" : "거짓이다.";
console.log(result); // 참이다

// 조건부 연산자와 if 문 비교
let condition1 = true;
let value2 = condition1 ? "참" : "거짓";
console.log(value2); // 참

let condition2 = true;
if (condition2) {
    value2 = "참";
} else { 
    value2 = "거짓";
}
console.log(value2); // 참

// 조건부 연산자 중복
let num1 = true;
let num2 = false;
let value3 = num1 ? (num2 ? "둘다 참" : "num1만 참") : "num1이 거짓"; 
console.log(value3); // num1만 참
