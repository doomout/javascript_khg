// 이벤트 루프 예제
function aaa() {
    setTimeout(() => {
       console.log('d');
    }, 0);
    console.log('c');
}

setTimeout(() => {
    console.log('a');
    aaa();
}, 0);

setTimeout(() => {
    aaa();
    console.log('b');
}, 0);

/*실행결과
a
c
c
b
d
d
*/