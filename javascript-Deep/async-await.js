// async/await 예제
const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
});
await setTimeoutPromise(1000); //프로미스가 resolve() 할 때까지 기다려라
console.log('1초 뒤에 실행된다.');
console.log('내가 나중에');

/*실행 결과
1초 뒤에 실행된다.
내가 나중에 
*/

// 함수 내부에서 await를 사용하려고 하면 function 앞에 async를 붙이면 된다.
const setTimeoutPromise1 = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
});
async function main() {
    await setTimeoutPromise1(2000); //프로미스가 resolve() 할 때까지 기다려라
    console.log('2초 뒤에 실행된다.');
    console.log('이게 나중에 나온다');
}
main();
/* 실행결과
2초 뒤에 실행된다.
이게 나중에 나온다
*/

// 화살표 함수도 앞에 async 를 붙여 async 함수로 만들 수 있다.
const setTimeoutPromise2 = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms) //프로미스가 resolve() 할 때까지 기다려라
});
const main2 = async () => {
    await setTimeoutPromise2(3000);
    console.log('3초 뒤에 실행된다.');
    console.log('이건 더 나중에 나온다');
};
main2();
/* 실행결과
3초 뒤에 실행된다.
이건 더 나중에 나온다
*/

// await 에는 에러 처리 메서드가 없어서  try/catch 문으로 감싸줘야 한다.
const p1 = new Promise((resolve, reject) => {
    reject('에러 발생');
});
try {
    await p1;
} catch(err) {
    console.log('에러인 경우');
} finally {
    console.log('성공이든 에러든 마지막에 실행');
}

/*실행결과
에러인 경우
성공이든 에러든 마지막에 실행
*/