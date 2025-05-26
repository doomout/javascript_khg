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