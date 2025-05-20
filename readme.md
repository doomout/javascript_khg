## 자바 스크립트 기초 문법
### 1. 변수 선언
```js
// ES6 이전
var x = 10;

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
### 6. 배열 메서드
```js
const arr = [1, 2, 3, 4, 5];

// forEach: 배열을 순회하며 함수 실행
arr.forEach(item => console.log(item));

// map: 배열 요소를 가공하여 새 배열 반환
const doubled = arr.map(item => item * 2);
console.log(doubled);
```
### 7. 객체 다루기
```js
const person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log("안녕하세요, " + this.name);
  }
};

person.greet();  // 안녕하세요, Alice
```