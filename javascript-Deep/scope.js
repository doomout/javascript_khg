//스코프란?

const number = [1,3,5,7];
for (let i = 0; i < number.length; i++) {
    setTimeout(() =>{
        console.log(number[i]);
    }, 1000 * (i + 1));
}

/*실행결과
1
3
5
7
*/

const number1 = [1,3,5,7];
for (var i = 0; i < number1.length; i++) { //let -> var로 변경
    setTimeout(() =>{
        console.log(number1[i]);
    }, 1000 * (i + 1));
}
/* 실행결과
undefined
undefined
undefined
undefined
*/

const number2 = [1,3,5,7];
for (var i = 0; i < number2.length; i++) { 
    setTimeout(() =>{
        console.log(i); //number1[i] -> i로 변경
    }, 1000 * (i + 1));
}
/* 실행결과
4
4
4
4
*/

// 블록 스코프와 함수 스코프
// var은 함수 스코프
function b() {
    var a = 1;
}
console.log(a); //ReferenceError: a is not defined

// var은 함수 스코프라서 if문 안에 들어 있어도 if문 밖에서 접근 가능
if (true) {
    var a = 1;
}
console.log(a); //1

for(var i = 0; i < 5; i++) {}
console.log(i); //5


// let는 블록 스코프라 블록 밖에서는 에러 발생
if(true) {
    let b = 1;
}
console.log(b); // ReferenceError: b is not defined

for(let j = 0; j < 5; j++) {}
console.log(j); // ReferenceError: j is not defined