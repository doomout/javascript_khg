// Math 객체

// 올림
console.log(Math.ceil(5.2)); // 6
// 반올림
console.log(Math.round(4.5)); // 5
// 내림
console.log(Math.floor(2.8)); // 2

// 최대값
console.log(Math.max(5,3,6)); // 6
// 최소값
console.log(Math.min(2,5,8,4)); // 2
// 제곱근
console.log(Math.sqrt(25)); // 5

// 랜덤값(0~1의 실수를 무작위로 생성)
console.log(Math.random()); // 0<= x < 1
console.log(Math.random() * 9); // 0<= x < 9
console.log(Math.random() * 9 + 1); // 1 <= x < 10
console.log(Math.floor(Math.random() * 9 + 1)); // 1 <= x <= 9