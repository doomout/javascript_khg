// 호출 스택 예제
// 스택이란? 마지막에 넣은 것이 가장 먼저 실행되는 것

function a() {
  b();
}
function b() {
    console.trace();
}

a();

/*실행결과
Trace
b 
a 
(anonymous)
*/