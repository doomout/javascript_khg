// 재귀 함수 예제
/*
let i = 0;
function recurse() {
    i++;
    recurse();
}
recurse(); // RangeError: Maximum call stack size exceeded
*/

// 위의 예제를 방지하려면 비동기 함수인 setTimeout()로 감싸서 시간은 0초로 즉시 호출 되도록 변경한다.
let i = 0;
function recurse() {
    i++;
    console.log(i);
    if(i >  20000) return;
    setTimeout(recurse, 0);
}
recurse(); 
/*실행결과
1
2
3
4
5
6
7
8
9
...
*/