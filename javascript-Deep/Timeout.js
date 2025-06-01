// 타이머 함수
/* 형식
// setTimeout(함수, 밀리초);
setTimeout(()=>{
    console.log('2초 뒤에 실행된다.');
}, 2000);

// 첫 번째 인수를 넣는 함수를 외부에서 가져와서 사용 가능
const callback = () => {
    console.log('3초 뒤에 실행된다.');
}
setTimeout(callback, 3000);
*/

setTimeout(() => {
    console.log('3초 뒤에 실행된다.');
}, 5000);
setTimeout(() => {
    console.log('2초 뒤에 실행된다.');
}, 3000);
setTimeout(() => {
    console.log('1초 뒤에 실행된다.');
}, 1000);
console.log('내가 먼저');

// clearTimeout() : setTimeout() 함수를 끄는 방법
const timerId = setTimeout(() => {
    console.log('5초 뒤에 실행된다.');
}, 0);
console.log('이건 나오는데 5초 뒤는 안나온다. 그전이 이미 종료했어');
clearTimeout(timerId);

/* 실행결과
내가 먼저
이건 나오는데 5초 뒤는 안나온다. 그전이 이미 종료했어
1초 뒤에 실행된다.
2초 뒤에 실행된다.
3초 뒤에 실행된다.
*/