//반복문 예제
// 1. while문
let i = 1;
while (i <= 5) {
    console.log("while문 반복 횟수: " + i);
    i++;
}

// 2. for 문
for (let j = 1; j <= 5; j++) {
    console.log("for문 반복 횟수: " + j);
}

// 3. break문
let r = 1;
while (r <= 5) {
    if (r === 3) {
        break; // r이 3일 때 반복문 종료
    }
    console.log("break문 반복 횟수: " + r);
    r++;
}
/*실행결과
break문 반복 횟수: 1
break문 반복 횟수: 2
*/

// 4. continue문
let s = 1;
while (s <= 5) {
    s++;
    if (s === 3) {
        continue; // s가 3일 때 다음 반복으로 넘어감
    }
    console.log("continue문 반복 횟수: " + s);
}
/*실행결과
continue문 반복 횟수: 2 
continue문 반복 횟수: 4
continue문 반복 횟수: 5
continue문 반복 횟수: 6
*/

// 5. 중첩 반복문
for (let k = 1; k <= 3; k++) {
    console.log("바깥쪽 반복문: " + k);
    for (let l = 1; l <= 2; l++) {
        console.log("안쪽 반복문: " + l);
    }
}

/*실행결과
바깥쪽 반복문: 1
안쪽 반복문: 1
안쪽 반복문: 2
바깥쪽 반복문: 2
안쪽 반복문: 1
안쪽 반복문: 2
바깥쪽 반복문: 3
안쪽 반복문: 1
안쪽 반복문: 2
*/