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
### 8. 2차원 배열, flat(), fill()
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