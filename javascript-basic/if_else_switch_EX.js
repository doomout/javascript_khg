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