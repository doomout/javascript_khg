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