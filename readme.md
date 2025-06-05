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
### 10. JavaScript의 this 정리
- 기본 개념
this는 함수가 어떻게 호출되었는지에 따라 가리키는 대상이 달라진다.  
정의된 위치가 아닌, "호출 방식"에 따라 동적으로 결정됨.  

(1)  전역 함수에서의 this
```js
function show() {
    console.log(this);
}
show(); // 브라우저에서는 window, Node.js에서는 global
/*
일반 함수 호출에서는 this는 전역 객체를 가리킨다.
브라우저: window
Node.js: global
*/
```
(2) 객체의 메서드로 호출된 경우
```js
const obj = {
    name: 'JS',
    sayName() {
        console.log(this.name);
    }
};
obj.sayName(); // JS
// this는 메서드를 호출한 객체를 가리킨다.
```
(3) bind(), call(), apply()를 사용한 경우
```js
function greet() {
    console.log(this.name);
}
const user = { name: 'Alice' };

greet.bind(user)();   // Alice
greet.call(user);     // Alice
greet.apply(user);    // Alice
// 이들 메서드를 사용하면 this를 지정한 객체로 고정할 수 있다.
```
(4) 화살표 함수에서의 this
```js
const obj = {
    name: 'Arrow',
    say: () => {
        console.log(this.name);
    }
};
obj.say(); // undefined (화살표 함수는 상위 스코프의 this 사용)
// 화살표 함수는 자신만의 this를 가지지 않는다.

// 대신 **정의된 위치의 상위 스코프의 this**를 사용한다.
const obj = {
    name: 'Arrow',
    say() {
        const inner = () => {
            console.log(this.name); // this는 obj를 가리킴
        };
        inner();
    }
};
obj.say(); // Arrow
```
(5) 생성자 함수에서의 this
```js
function Person(name) {
    this.name = name;
}
const p = new Person('John');
console.log(p.name); // John
// new 키워드를 사용하면 this는 새로 생성된 객체를 가리킨다.
```
(6) 클래스 내부의 this
```js
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' sounds');
    }
}
const dog = new Animal('Dog');
dog.speak(); // Dog sounds
// 클래스 내부의 메서드에서도 this는 해당 인스턴스를 가리킨다.
```
-  한 줄 요약  
JavaScript의 this는 "어떻게 호출되었느냐"에 따라 바뀌며,   
화살표 함수는 예외적으로 상위 스코프의 this를 사용한다.
### 11. HTML - DOM 사용하기
(1) document.querySelector(선택자)
- 첫 번째로 일치하는 요소 하나를 선택한다.
- 선택자 문법은 CSS와 동일하다.
```js
// input 태그 선택
const $input = document.querySelector('input');

// id가 'order'인 요소 선택
const $order = document.querySelector('#order');

// div 안의 첫 번째 span 선택
const $span = document.querySelector('div span');
```
(2) document.querySelectorAll(선택자)
- 일치하는 모든 요소를 선택해서 NodeList로 반환한다.
- 유사 배열이므로 forEach 반복 가능
```js
// 모든 button 태그 선택
const $$button = document.querySelectorAll('button');

// class가 'hello'인 모든 버튼 선택
const $$buttons = document.querySelectorAll('.hello');
```
(3) 텍스트, 태그 가져오기
```js
<script>
  // 태그.textContent : 태그 내부의 문자열을 가져옴
  const $order = document.querySelector('#order');
  console.log($order.textContent);
  const $div = document.querySelector('div');
  console.log($div.textContent);
  // 태그.innerHTML : 태그 내부의 HTML 태그를 포함한 문자열 가져옴
  const $div1 = document.querySelector('div');
  console.log($div1.innerHTML);
</script>
```

### 12. 자바스크립트 이벤트 등록 방식 정리

자바스크립트에서는 HTML 요소에 이벤트를 등록하는 방식이 여러 가지가 존재한다. 
각 방식의 특징과 차이점을 아래에 정리한다.

---

1. HTML 인라인 이벤트 방식

```html
<button onclick="alert('클릭됨')">버튼</button>
```
- HTML 태그에 직접 자바스크립트 코드를 작성
- 빠르고 직관적이지만, HTML과 JS가 섞여 유지보수에 불리
- 비추천하는 방식

2. DOM 속성 방식 (element.onclick)
```html
const button = document.querySelector('button');
button.onclick = () => {
    console.log('버튼 클릭됨');
};
```
- JS에서 직접 이벤트 핸들러 등록
- 직관적이고 간단하지만,
- 이전에 등록된 핸들러를 덮어쓴다 (오직 하나만 유지됨)

3. addEventListener 방식 (권장)
```html
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('버튼 클릭됨');
});
```
- 하나의 요소에 여러 개의 이벤트 핸들러 등록 가능
- 핸들러 제거(removeEventListener) 가능
- 이벤트 위임(delegate) 에도 사용 가능
- 모듈화, 유지보수, 확장성 모두 뛰어나 가장 추천되는 방식

4. 추가 정보
- click, keydown, input, submit, ... :	이벤트 이름은 모두 표준 DOM 이벤트 이름
- onclick, oninput, onchange, ...	: 속성 방식에서는 접두사로 on을 붙임
- addEventListener('click', handler)	: 이벤트 이름에서 on은 제거하고 순수 이벤트명 사용

### 13. 클로저와 정적 스코프
(1) 스코프(Scope)의 기본 개념

| 구분 | JavaScript | C# |
|------|------------|----|
| 변수 유효 범위 | `{}` 기준 (블록 범위 + 함수 스코프) | `{}` 기준 블록 범위 |
| 스코프 결정 방식 | 정적 스코프 (렉시컬 스코프) | 정적 스코프 |

(2) 정적 스코프(Static Scope)  
- 코드에서 변수가 **어디서 정의되었는지(선언 위치)**에 따라 어떤 값을 참조할지 결정됨.  
- (함수를 어디서 호출하느냐가 아님)

(3) 클로저(Closure)란?

| 항목 | 설명 |
|------|------|
| 정의 | 함수가 생성될 당시의 **상위 스코프 변수**를 기억하고 접근할 수 있는 기능 |
| 특징 | 함수가 반환되거나 전달되더라도 외부 변수 참조 가능 |
| 메모리 유지 | 함수가 해당 변수를 **참조하고 있는 한**, 메모리에서 유지됨 (GC 대상 아님)

```js
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
```
### 14. Promise란?
- 비동기 작업을 보다 쉽게 처리하기 위한 자바스크립트의 내장 객체
- 성공(resolve) 또는 실패(reject)를 나중에 알려주는 약속(promise) 같은 역할
```js
const promise = new Promise((resolve, reject) => {
    // 비동기 작업
    if (성공조건) {
        resolve(결과값);
    } else {
        reject(에러값);
    }
});
```
- 사용 예시 (then / catch)
```js
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("성공!");
    }, 1000);
});

p.then((result) => {
    console.log(result); // "성공!"
}).catch((error) => {
    console.error(error); // 에러 발생 시 출력
});
```
- Promise 체이닝
```js
doSomething()
    .then(result => doSomethingElse(result))
    .then(finalResult => console.log(finalResult))
    .catch(err => console.error(err));
```
- 유용한 Promise 함수들
```js
// Promise.resolve()
Promise.resolve("ok").then(console.log); // "ok"

// Promise.reject()
Promise.reject("error").catch(console.error); // "error"

// Promise.all()
Promise.all([p1, p2, p3])
    .then(results => console.log(results))
    .catch(err => console.error(err));

// Promise.race()
Promise.race([p1, p2, p3])
    .then(result => console.log(result));

// 예제: setTimeout을 Promise로 변환
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

delay(2000).then(() => {
    console.log("2초 뒤에 실행됨");
});
```
### 15. 이벤트 버블링
| 개념                    | 설명                    |
| --------------------- | --------------------- |
| `event.target`        | 실제로 클릭된 요소            |
| `event.currentTarget` | 현재 이벤트 핸들러가 걸려 있는 요소  |
| 이벤트 버블링               | 이벤트가 자식 → 부모로 전파되는 현상 |