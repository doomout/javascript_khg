// setInterval(): 지정한 시간마다 주기적으로 지정한 함수를 실행
// setInterval(함수, 밀리초);
/*
setInterval(() => {
    console.log('2초마다 실행된다.');
}, 2000);
*/
/* 실행결과
2초마다 실행된다.
2초마다 실행된다.
2초마다 실행된다.
*/

// 핵폭탄 프로그램
let count = 0;  // 몇 번 실행했는지 셀 변수

const timerId = setInterval(() => {
    count++;  // 실행할 때마다 count 1 증가
    console.log(`(${count}) 초 후 폭발한다. 으하하하하`);

    if (count === 5) {
        clearInterval(timerId);  // 5번 실행되면 종료
        console.log('핵폭탄 타이머 종료');
    }
}, 2000);

console.log('핵폭탄 타이머 시작됨');
