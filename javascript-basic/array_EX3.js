// 함수를 인수로 받는 배열 메서드

// 1. forEach()
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
// 2. map() 
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

// 3. find()
const array2 = [1, 3, 5, 7];
 
console.log(array2.find((v, i) => {
    return v > 1;
})); // 3

// 4. findIndex() : find()와 동일한 조건으로 인덱스를 반환, 못 찾으면 -1 반환
console.log(array2.findIndex((v, i) => {
    return v > 1;
})); // 1

// 5. filter() : 조건에 맞는 요소를 모두 반환
console.log(array2.filter((v, i) => {
    return v > 1;
})); // [ 3, 5, 7 ]

const nested = [{age: 29}, {age: 5}, {age: 3}];
console.log(nested.filter((v) => {
    return v.age < 29
})); //[ { age: 5 }, { age: 3 } ]
// 화살표 함수로 간단히 표현
console.log(nested.filter((v) => v.age < 29 )); // [ { age: 5 }, { age: 3 } ]

// 6. sort() : 배열을 정렬
/* 
정렬 함수 (a, b) => a - b 의미 설명:
sort()에 넘겨주는 함수 (a, b)는 배열의 두 요소 a와 b를 비교해서:

음수를 반환하면 → a가 b보다 앞에 오게 한다

0을 반환하면 → 순서를 바꾸지 않는다

양수를 반환하면 → a가 b보다 뒤에 오게 한다
*/
const arr1 = [1, 5, 4, 2, 3];

arr1.sort((a, b) => a - b); // 오름차순 정렬
console.log(arr1); // [ 1, 2, 3, 4, 5 ]

const arr2 = [1, 5, 4, 2, 3];
arr2.sort((a, b) => b - a); // 내림차순 정렬
console.log(arr2); // [ 5, 4, 3, 2, 1 ]

// 원본을 남기고 정렬하기
const arr3 = [9, 5, 4, 2, 3, 7, 1];
const shallow = [...arr3]; // 얕은 복사
shallow.sort((a, b) => a - b); // 오름차순 정렬
console.log(shallow); // [1, 2, 3, 4, 5, 7, 9]
console.log(arr3); // [9, 5, 4, 2, 3, 7, 1 ] (원본은 변경되지 않음)

// 7. reduce() : 배열을 하나의 값으로 줄임
/*형식
배열.reduce((누적값, 현재값, 현재인덱스, 원본배열) => {
    // 누적값을 변경하는 로직
}, 초기값);
*/
const arr4 = [1,2,3,4,5].reduce((a,c) => {
    return a + c;
}, 0);
console.log(arr4); // 15

// reduce()를 사용한 객체 만들기
const arr5 = [1,2,3,4,5].reduce((a,c) => {
   a[c] = c * 10;
    return a;
}, {});
console.log(arr5); // { '1': 10, '2': 20, '3': 30, '4': 40, '5': 50 }

// every() : 배열에서 모든 요소가 조건에 해당하는지 판단
const arr6 = [1,3,5,7];
console.log(arr6.every((v) => v !== null )); // true
console.log(arr6.every((v) => v === null )); // false

// some() : 배열에서 하나라도 조건에 해당하는지 판단
const arr7 = [1, 3, null, 7];
console.log(arr7.some((v) => v === null )); // true