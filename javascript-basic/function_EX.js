// 함수 예제
// 1. 함수 선언
/* 형식
function() {};
() => {};
 */ 
function a() {
    console.log("함수 a");
}

// 2. 함수 호출
a();
a();
a();
/*실행결과
함수 a
함수 a
함수 a
*/

// 3. 반환값 있는 함수
function b() {
    console.log("함수 b");
    return 10;
}

b();
b();
b();

/*실행결과
함수 b
함수 b
함수 b
*/

// 4. 매개변수와 인수 사용하기
function c(parameter) {
    console.log(parameter);
}
c("인수로 전달된 값"); // 인수로 전달된 값

/*실행결과
인수로 전달된 값
*/

// 5. 여러 개의 매개변수 사용하기 (빈 매개변수는 undefined로 처리됨)
function d(w, x, y, z) {
    console.log(w,x,y,z);
    console.log(arguments); // arguments 객체는 함수에 전달된 인수들을 배열 형태로 저장
}
d('Hello', 'parameter', 'Hell');
/*실행결과
Hello parameter Hell undefined
[Arguments] { '0': 'Hello', '1': 'parameter', '2': 'Hell' }
*/

function add(x, y) {
    return console.log(x + y);
}

add(10, 20); // 30
add(10, 20, 30); // 30 (추가 인수는 무시됨)
add(10); // NaN (y가 undefined이므로 10 + undefined는 NaN)
add(); // NaN (x와 y가 모두 undefined이므로 undefined + undefined는 NaN)

// 6. 다른 변수 사용하기
function minus1(x, y) {
    const a = 100;
    return (x - y) * a;
}
console.log(minus1(5, 3)); // 200

const aa = 100;
function minus2(x, y) {
    return (x - y) * aa; // 외부 변수 aa를 사용
}
console.log(minus2(5, 3)); // 200

// 7. 고차 함수 사용하기
const func = () => {
    return () => {
        console.log("내부 함수 실행");
    };
};
const innerFunc = func();
innerFunc(); // 내부 함수 실행

const func2= (msg) => {
    return () => {
        console.log(msg);
    };
};

const innerFunc1 = func2("Hello");
const innerFunc2 = func2("javascript");
const innerFunc3 = func2();
innerFunc1(); // Hello
innerFunc2(); // javascript
innerFunc3(); // undefined