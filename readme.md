## 자바 스크립트 기초 문법
### 1. 변수 선언
```js
// ES6 이전
// var 은 이제 안쓰는 추세다
var x = 10;

// 기본적으로 const를 쓰고, 꼭 필요할 때만 let을 쓰는 패턴이 많다.
// ES6 이후 (추천)
let y = 20;
const z = 30;  // 상수 (변경 불가)
```  
### 2. 자료형
```js
let number = 100;            // 숫자형
let string = "Hello World";  // 문자열
let boolean = true;          // 불리언 (참/거짓)
let obj = {name: "John"};    // 객체
let arr = [1, 2, 3];         // 배열
let nothing = null;          // 빈 값
let notDefined;              // 정의되지 않음 (undefined)
```
✅ undefined의 특징
| 항목        | 설명                                      |
| --------- | --------------------------------------- |
| **정의**    | 값이 **할당되지 않은 변수**의 기본값                  |
| **자동 할당** | 변수를 선언만 하고 값을 안 넣으면 자동으로 `undefined`가 됨 |
| **타입**    | `undefined` (자체적인 타입)                   |
| **사용 예시** | 변수에 값을 넣지 않았거나, 객체에 존재하지 않는 속성을 참조할 때   |

✅ null의 특징
| 항목            | 설명                               |
| ------------- | -------------------------------- |
| **정의**        | 개발자가 **명시적으로 '값이 없다'고 지정**할 때 사용 |
| **자동 할당 안 됨** | 직접 `null`을 넣지 않는 한 기본값이 되지 않음    |
| **타입**        | `object` (자바스크립트의 오래된 버그지만 유지됨)  |
| **사용 예시**     | 값을 비워두겠다는 **의도적인 표시**            |

✅ 비교 (undefined vs null)
| 항목             | `undefined`                              | `null`        |
| -------------- | ---------------------------------------- | ------------- |
| **누가 정하나?**    | 자바스크립트 엔진이 자동으로                          | 개발자가 의도적으로 지정 |
| **타입**         | `undefined`                              | `object`      |
| **의미**         | 값이 정의되지 않음                               | 값이 없음을 명시     |
| **비교 (`==`)**  | `undefined == null` → `true` (값만 비교)     |               |
| **비교 (`===`)** | `undefined === null` → `false` (타입까지 비교) |               |

### 3. 함수 선언
```js
// 함수 선언식
function add(a, b) {
  return a + b;
}

// 함수 표현식 (변수에 함수 할당)
const multiply = function(a, b) {
  return a * b;
}

// 화살표 함수 (ES6)
const subtract = (a, b) => a - b;
```
### 4. 조건문
```js
if (x > 10) {
  console.log("x는 10보다 큽니다.");
} else if (x === 10) {
  console.log("x는 10입니다.");
} else {
  console.log("x는 10보다 작습니다.");
}
```
### 5. 반복문
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
### 6. 배열 요소 조작 (추가 / 수정 / 삭제)
```js
// 배열 생성
let fruits = ["사과", "바나나", "포도"];

// 요소 추가
// 1. push() - 배열 끝에 추가
fruits.push("오렌지"); // ["사과", "바나나", "포도", "오렌지"]

// 2. unshift() - 배열 앞에 추가
fruits.unshift("딸기"); // ["딸기", "사과", "바나나", "포도", "오렌지"]

// 3. 특정 위치에 삽입: splice(index, 0, 값)
fruits.splice(2, 0, "키위"); // 2번째 자리에 "키위" 삽입
// 결과: ["딸기", "사과", "키위", "바나나", "포도", "오렌지"]

// 요소 수정
// 4. 인덱스로 접근해 직접 수정
fruits[1] = "망고"; // 1번째 요소를 "망고"로 변경
// 결과: ["딸기", "망고", "키위", "바나나", "포도", "오렌지"]

// 요소 삭제
// 5. pop() - 마지막 요소 삭제
fruits.pop(); // ["딸기", "망고", "키위", "바나나", "포도"]

// 6. shift() - 첫 번째 요소 삭제
fruits.shift(); // ["망고", "키위", "바나나", "포도"]

// 7. splice(index, 개수) - 중간 요소 삭제
fruits.splice(1, 2); // 1번 인덱스부터 2개 삭제 ("키위", "바나나")
// 결과: ["망고", "포도"]

```
### 7. JavaScript 객체 요약
```js
// 1. 객체 생성
const person = {
  name: "홍길동",
  age: 30,
};

// 2. 속성 접근
console.log(person.name);    // 점 표기법
console.log(person["age"]);  // 대괄호 표기법

// 3. 속성 추가
person.job = "개발자";       // 점 표기법으로 속성 추가
person["gender"] = "남성";   // 대괄호 표기법으로 속성 추가

// 4. 속성 수정
person.age = 31;             // 기존 속성 값 수정

// 5. 속성 삭제
delete person.job;           // job 속성 제거

// 6. 메서드 정의 및 호출
const user = {
  name: "영희",
  greet() {
    // this는 객체 자신을 가리킴
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  }
};
user.greet(); // "안녕하세요, 저는 영희입니다."

// 7. 옵셔널 체이닝 (?.)
const data = {
  user: {
    name: "민수"
  }
};
console.log(data.user?.name);     // "민수"
console.log(data.admin?.name);    // undefined (오류 안 남)

// 8. 얕은 복사 (Shallow Copy)
const original = { a: 1, b: 2 };
const copy = { ...original };     // 스프레드 연산자
copy.a = 100;
console.log(original.a);          // 1 (원본은 그대로)

// 주의점 :  중첩 객체가 있을 땐 참조가 복사됨
const original = { nested: { x: 1 } };
const copy = { ...original };
copy.nested.x = 99;
console.log(original.nested.x);   // 99 (같은 객체 참조)

// 9. 깊은 복사 (Deep Copy)
const original = { nested: { x: 1 } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.nested.x = 100;
console.log(original.nested.x);   // 1 (원본 유지)

// 10. 구조 분해 할당 (Destructuring)
const user = { name: "철수", age: 20 };
// 동일한 이름의 변수에 값 할당
const { name, age } = user;
console.log(name); // "철수"
console.log(age);  // 20
// 변수 이름 변경
const { name: userName } = user;
console.log(userName); // "철수"
```
### 8. 2차원 배열, flat(), fill(), Set()
```js
// flat() 예제
// 2차원 배열 선언
const array = [[1,2,3], [4,5,6], [7,8,9]];
// flat()은 배열의 차원을 한 단계 낮추는 기능
console.log(array.flat()); 
/* 실행 결과
[
  1, 2, 3, 4, 5, 6, 7, 8, 9
]
*/
```
```js
// fill() 예제
// 5의 길이의 빈 배열 생성
const empty = Array(5);
// fill()은 배열의 모든 요소를 지정한 값으로 채우는 기능
console.log(empty.fill());  // [ undefined, undefined, undefined, undefined, undefined ]
// fill()에 값을 넣으면 해당 값으로 채워진다.
console.log(empty.fill(1)); // [ 1, 1, 1, 1, 1 ]

```
```js
// Set()로 중복 제거
const array_set = [1,2,1,3,3,5];
console.log(new Set(array_set)); // Set(4) { 1, 2, 3, 5 }

// Set의 요소 개수를 구할 때는 size 속성을 사용한다.
console.log(new Set(string_set).size); // 3

// Set은 배열의 메서드를 사용할 수 없기 때문에, 다시 배열로 변환해야 한다.
// Set을 배열로 변환할 때는 Array.from()를 사용한다.
const uniqueArray = Array.from(new Set(array_set));
console.log(uniqueArray); // [ 1, 2, 3, 5 ]
```
### 9. 함수를 인수로 받는 배열 메서드
- forEach()
```js
const arr = [1,5,4,2];
arr.forEach((number, index) => {
    console.log(number, index);
});
/*실행결과
1 0
5 1
4 2
2 3
*/
```
- map() 
```js
const numbers = [];
for (let n = 1; n <= 5; n += 1) {
    numbers.push(n); //1~5 까지 배열만듬
}
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// 인덱스를 사용한 map()으로 배열 만들기
const numbers1 = Array(5).fill(1).map((v, i) => i + 1);
console.log(numbers1); // [ 1, 2, 3, 4, 5 ]

// 요소를 사용한 map()으로 배열 만들기
const array1 = [1,3,5,7];
const newArray = array1.map((v, i) => {
    return v * 2; // 요소에 x2
});
console.log(array1); // [ 1, 3, 5, 7 ]
console.log(newArray); // [ 2, 6, 10, 14 ]
```
- find()
```js
const array2 = [1, 3, 5, 7];
 
console.log(array2.find((v, i) => {
    return v > 1;
})); // 3
```
- findIndex() : find()와 동일한 조건으로 인덱스를 반환, 못 찾으면 -1 반환
```js
console.log(array2.findIndex((v, i) => {
    return v > 1;
})); // 1
```
- filter() : 조건에 맞는 요소를 모두 반환
```js
console.log(array2.filter((v, i) => {
    return v > 1;
})); // [ 3, 5, 7 ]

const nested = [{age: 29}, {age: 5}, {age: 3}];
console.log(nested.filter((v) => {
    return v.age < 29
})); //[ { age: 5 }, { age: 3 } ]
// 화살표 함수로 간단히 표현
console.log(nested.filter((v) => v.age < 29 )); // [ { age: 5 }, { age: 3 } ]
```
- sort() : 배열을 정렬  
정렬 함수 (a, b) => a - b 의미 설명:  
sort()에 넘겨주는 함수 (a, b)는 배열의 두 요소 a와 b를 비교해서:  
음수를 반환하면 → a가 b보다 앞에 오게 한다  
0을 반환하면 → 순서를 바꾸지 않는다  
양수를 반환하면 → a가 b보다 뒤에 오게 한다
```js
const arr1 = [1, 5, 4, 2, 3];
arr1.sort((a, b) => a - b); // 오름차순 정렬
console.log(arr1); // [ 1, 2, 3, 4, 5 ]

const arr2 = [1, 5, 4, 2, 3];
arr2.sort((a, b) => b - a); // 내림차순 정렬
console.log(arr2); // [ 5, 4, 3, 2, 1 ]
```
- reduce() : 배열을 하나의 값으로 줄임
```js
const arr4 = [1,2,3,4,5].reduce((a,c) => {
    return a + c;
}, 0);
console.log(arr4); // 15

// reduce()를 사용한 객체 만들기
const arr5 = [1,2,3,4,5].reduce((a,c) => {
   a[c] = c * 10;
    return a;
}, {});
console.log(arr5); 
// { '1': 10, '2': 20, '3': 30, '4': 40, '5': 50 }
```
- every() : 배열에서 모든 요소가 조건에 해당하는지 판단
```js
const arr6 = [1,3,5,7];
console.log(arr6.every((v) => v !== null )); // true
console.log(arr6.every((v) => v === null )); // false
```
- some() : 배열에서 하나라도 조건에 해당하는지 판단
```js
const arr7 = [1, 3, null, 7];
console.log(arr7.some((v) => v === null )); // true
```