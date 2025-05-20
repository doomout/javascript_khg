// 자바 스크립트 문자, 불 값 비교 연산자 예제

console.log('문자 비교 연산자(b는 98, a는 97)'); 
console.log('b' > 'a'); // true
console.log('문자 비교 연산자(a는 97로 동일, b는 98, d는 100)'); 
console.log('ad' > 'ab'); // true
console.log('a는 동일이지만, a 다음 문자가 없는 경우엔 다음 문자가 있는 값이 더 크다.'); 
console.log('ab' > 'a'); // true

console.log('문자 번호 알아내는 방법');
console.log('b'.charCodeAt(0)); // 98

console.log('논리 연산자 예제');
console.log(10 > 5 && 6 < 8); // true 
console.log(10 < 5 || 6 > 8); // false
console.log(!(10 > 5)); // false

console.log('불 값으로 형변환 했을 때 false가 나오는 값, 나머지는 true');
console.log(!!false); // false
console.log(!!''); // false
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!null); // false
console.log(!!undefined); // false

console.log('논리 연산자 사용시 주의점: ');
console.log('&& 연산자는 앞이 거짓이면 앞의 값을, \n앞이 참이면 뒤의 값을 결과로 보낸다.');
console.log(5 && 4); // 4
console.log('' && 6); // ''

console.log('|| 연산자는 앞이 참이면 앞의 값을, \n앞이 거짓이면 뒤의 값을 결과로 보낸다.'); 
console.log('hi' || 5); // hi
console.log(0 || 5); // 5
console.log(null || 6); // 6

console.log('?? 연산자는 앞이 null 이거나 undefined이면 뒤의 값을, \n앞이 null 이거나 undefined가 아니면 앞의 값을 결과로 보낸다.');
console.log('hi' ?? 5); // hi
console.log(0 ?? 6); // 0    
console.log(null ?? 5); // 5
console.log(undefined ?? 5); // 5

console.log('undefined는 빈 값을 표현한다.');
console.log(undefined == false); // false
console.log(undefined == 0); // false
console.log(undefined == ''); // false

console.log('undefined 와 null은 다음과 같은 특징이 있다.');
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(!!null); // false
