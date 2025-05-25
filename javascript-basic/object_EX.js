// 객체 리터럴 예제
/* 형식
{
    <속성이름>: <속성값>,
}
 */
// 1. 객체 생성하기
const qwer = {
    name : '이시연',
    year : 2002,
    month: 8,
    date: 12, 
    gender : "Woman",
};
// 2. 객체의 속성에 접근하는 두 가지 방법
console.log(qwer.name); // '이시연'
console.log(qwer['name']);  // '이시연'

// 3. 객체 속성을 추가/수정/삭제하기
console.log(qwer); // { name: '이시연', year: 2002, month: 8, date: 12, gender: 'Woman' }
qwer.age = 21; // 속성 추가
qwer.year = 2003; // 속성 수정
delete qwer.month; // 속성 삭제
console.log(qwer.age, qwer.year, qwer.month); // 21 2003 undefined

// 4. 메서드 이해하기 (속성 값으로 함수가 들어가면 메서드라고 한다.)
const debug = {
    log: function(value) {
        console.log(value);
    },
};
debug.log('Hello, Method'); // Hello, Method

// 5. 중첩된 객체
const qwer1 = {
    name : {
        first: '거대',
        last: '냥이',
    },
    gender : "Cat",
};
console.log(qwer1.name.first); // '거대'
console.log(qwer1['name'].last); // '냥이'
console.log(qwer1.name['first']); // '거대'

// 6. 옵셔널 체이닝 연산자 사용 예제
// ?. 객체에 어떤 속성이 있는지 잘 모를 때 사용
console.log(qwer1.name?.first); // '거대' (?. 사용으로 안전하게 접근)
console.log(qwer1.name?.middle); // undefined (?. middle 속성이 없어서 undefined)

// 7. 객체의 얕은 복사 
const array1 = [{j: 'k'}, {l: 'm'}];
const shallow = [...array1]; // 얕은 복사(외부 객체만 복사 되고, 내부 객체 참조 관계는 유지)
console.log(array1 === shallow); // false (다른 객체)
console.log(array1[0] === shallow[0]); // true (내부 객체는 같은 참조)

const shallow2 = array1.slice(); // 얕은 복사(외부 객체만 복사 되고, 내부 객체 참조 관계는 유지)
console.log(array1 === shallow2); // false (다른 객체)
console.log(array1[0] === shallow2[0]); // true (내부 객체는 같은 참조)

const shallow3 = array1.concat(); // 얕은 복사(외부 객체만 복사 되고, 내부 객체 참조 관계는 유지)
console.log(array1 === shallow3); // false (다른 객체)
console.log(array1[0] === shallow3[0]); // true (내부 객체는 같은 참조)

// 8. 객체의 깊은 복사
const array2 = [{a: 'b'}, {c: 'd'}];
const deep = JSON.parse(JSON.stringify(array2)); // 깊은 복사
console.log(array2 === deep); // false
console.log(array2[0] === deep[0]); // false

// 9. 구조 분해 할당
// 객체의 속성 이름과 대입하는 변수명이 같을 때 다음과 같이 줄여서 쓸 수 있다.
const obj = { a: 1, b: 2};
//const a = obj.a;
//const b = obj.b;
const {a, b} = obj; // 주석 부분을 한 줄로 표현
console.log(a); // 1
console.log(b); // 2

// 배열도 구조 분해 할당을 적용할 수 있다.
const array3 = [1,2,5];
//const one = array3[0];
//const two = array3[1];
//const five = array3[2];
const [one, two, five] = array3; //위의 3줄을 한 줄로 요약
console.log(five); // 5

// 이미 선언된 변수에도 구조분해 할당을 할 수 있다.
// 이 예제는 변수 c와 d의 값을 서로 바꾸는 코드
let c = 5;
let d = 3;
console.log([d, c] = [c, d]);  // [ 5, 3 ]