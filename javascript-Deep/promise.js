// 프로미스 예제
/* 프로미스 형식
const <프로미스 객체> = new Promise((resolve, reject) => {
    resolve(); // 프로미스 성공
    // 또는
    reject(); // 프로미스 실패    
});

<프로미스 객체>.then(<콜백함수>);
// 또는
<프로미스 객체>.catch(<콜백함수>);
 */
const p1 = new Promise((resolve, reject)=> {
    resolve('success');
});
p1.then((data) => console.log(data));
const p2 = new Promise((resolve, reject) => {
    reject('error');
});
p2.catch((data) => console.log(data));
/*실행결과
success
error
*/

// 비동기 코드
const timerId = setTimeout(() => {
    console.log('0초 뒤에 실행된다.');
},0);
// 0초 뒤에 실행된다.

// 프로미스 문법으로 변환
const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});
setTimeoutPromise(3000).then(() => {
    console.log('3초 뒤에 실행된다.');
});
// 3초 뒤에 실행된다.

const p3 = new Promise((resolve, reject) => {
    resolve('프로미스 작업을 한다.');
}); 
console.log('다른 일을 ');
console.log('열심히 ');
console.log('하다가 ');
p3.then(console.log);

/*실행결과
다른 일을 
열심히 
하다가
프로미스 작업을 한다.
*/

// 프로미스를 만들면 필요할 때 then()을 호출할 수 있다.
const setTimeoutPromise1 = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});
const promise = setTimeoutPromise1(0);
console.log('다른 일을 하다가 ');
console.log('필요할 때 ');
console.log('then을 호출해 보세요.');
promise.then(() => {
    console.log('0초 뒤에 실행된다.')
});
promise.catch((err) =>{
    console.log('에러 발생시 실행된다.');
});

/* 실행결과
다른 일을 하다가
필요할 때
then을 호출해 보세요.
0초 뒤에 실행된다.
*/

// then() 이나 catch() 메서드는 다음과 같이 연달아 사용할 수 있다.
const promise2 = setTimeoutPromise(0);
promise2
    .then(() => {
        return 'a';
    })
    .then((data) => {
        console.log(data); // a
        return 'b';
    })
    .then((data) => {
        console.log(data); // b
    });

// 프로미스에는 finally() 메서드도 있다. 실행이 끝난후 무조건 실행
const promise3 = setTimeoutPromise(0);
promise3
    .then(() => {
        console.log('0초 뒤에 실행된다.');
    })
    .catch((err) => {
        console.log('에러 발생시 실행된다.');
    })
    .finally((err) => {
        console.log('성공이든 실패든 무조건 실행된다.');
    });

/*실행결과
0초 뒤에 실행된다.
성공이든 실패든 무조건 실행된다.
*/