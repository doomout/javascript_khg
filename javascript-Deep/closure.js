// 클로저와 정적 스코프 예제

// 클로저란? 외부 값에 접근하는 함수
// 이 함수는 현재 외부에 있는 변수 a를 사용 중이다. 그래서 클로저다. 
const a = 1;
const func = () => {
    console.log(a);
}
func(); //1

// 이 함수도 크로로저다. 자신의 외부에 있는 msg를 사용하기 때문이다.
const func1 = (msg) => {
    return () => {
        console.log(msg);
    };
};

// 클로저가 외부 값에 접근할 수 있는지 판단하는 기준은 스코프다.
// 이 코드는 실행 될까? 아래와 같은 에러가 난다.
// 에러의 이유: 변수 b는 if문 {} 에서 선언되었고,
// const 는 블록 스코프이기에 if문 밖에서는 변수 b에 접근 할 수 없다.
// 이처럼 호출된 위치에 따라 접근할 수 있는 값이 달라진다면 동적 스코프를 따른다.

const func2 = () => {
    console.log(b); // ReferenceError: b is not defined
};
if (true) {
    const b = 1; // b는 블록 스코프이기에 if문 에서만 사용 가능
    func2();
}

// 아래 switch 문에선 qwer 모두 name이름 변수를 사용해서 에러가 난다.
// 이를 해결 하기 위해서는 블록{} 으로 묶어줘야 한다.
const type = 'w';
switch (type) {
    case 'q': {
        let name = '쵸단'
        console.log(name);
        break;
    }
    case 'w': {
        let name = '마젠타'
        console.log(name);
        break;
    }
    case 'e': {
        let name = '히나'
        console.log(name);
        break;
    }
    case 'r': {
        let name = '시연'
        console.log(name);
        break;
    }
    default:
        let name = 'QWER'
        console.log(name);
        break;
}
