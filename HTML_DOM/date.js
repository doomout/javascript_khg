// Date 생성자 함수 예제
// 형식: const <날짜 객체> = new Date(연, 월, 일, 시, 분, 초, 밀리초);
// 형식: const <날짜 객체> = new Date(타임스탬프);
// 타임스탬프란? 1970년 1월 1일 자정으로부터 지나온 밀리초를 의미

// 타임스탬프
console.log(Date.now());  // 1749302735190
// 현재 날짜와 시간
console.log(new Date());  // 2025-06-07T13:25:35.197Z

// 직접 시간을 지정
console.log(new Date(2025, 6, 7)); //2025-07-06T15:00:00.000Z
console.log(new Date(2025, 6, 7, 22, 24, 5)); //2025-07-07T13:24:05.000Z

// 시간차 계산
console.log(new Date(2025, 6, 7) - new Date(1981,12, 3)); // 1372982400000

// 날짜 객체 수정
const date = new Date(2025, 6, 7);
console.log(date.setDate(10)); // 1752073200000
console.log(date.getDate()); // 10