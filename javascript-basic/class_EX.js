// 클래스 : 객체를 생성하기 위한 템플릿(서식), ES2015에서 추가

// 함수로 객체를 생성하는 방법
// 1. 공장 함수
function createMonster(name, hp, att) {
    return { 
        name, hp, att,
        attack,
    };
}
// 공격 메서드를 함수화
function attack(monster) { 
    monster.hp -= this.att;
}
const monster1 = createMonster('슬라임', 25, 10);
const monster2 = createMonster('슬라임', 26, 9);
const monster3 = createMonster('슬라임', 25, 11);
monster1.attack === monster2.attack; // true
console.log(monster1); //{ name: '슬라임', hp: 25, att: 10, attack: [Function: attack] }

// 2. 생성자 함수
function Monster(name, hp, att) {
    this.name = name;
    this.hp = hp;
    this.att = att;
}
Monster.prototype.attack = function() { //prototype은 생성자 함수로 생성한 객체가 공유하는 속성
    monster.hp -= this.att;
}
const monster4 = new Monster('슬라임', 25, 10);
const monster5 = new Monster('슬라임', 26, 9);
const monster6 = new Monster('슬라임', 25, 11);
monster4.attack === monster5.attack; // true
console.log(monster4); // Monster { name: '슬라임', hp: 25, att: 10 }

// 3.this 이해하기
function a() {
    console.log(this); // 전역 객체를 가리킴
};
a(); // Window { ... } (브라우저 환경에서)

// 3-1.객체 메서드로 this를 사용하면 this는 해당 객체를 가리킴
const b = {
    name: 'qwer',
    sayName() {
        console.log(this === b); 
    }
};
b.sayName(); // true

// 3-2.함수의 this는 bind() 메소드를 사용해 값을 바꿀수 있다.
// 다음 코드는 bind() 메서드로 this를 obj로 바꿔서 c() 함수를 호출해야 함수가 실행
const obj = { name: 'qwer' };
function c() {
    console.log(this);
}
c.bind(obj)(); // { name: 'qwer' } (obj를 this로 사용)

// 3-3.화살표 함수는 bind() 메서드를 사용해도 this를 바꿀 수 없다. 
// 아래 코드는 this가 바뀌지 않아서 window 객체를 가리킨다.
const d = () => {
    console.log(this); // 화살표 함수는 this를 바인딩하지 않음, 상위 스코프의 this를 사용
}
d.bind(obj)(); // {}

// sayName1()를 호출하면 whatIsThis() 함수도 같이 호출된다. 
// 화살표 함수는 this를 window 객체로 만드는게 아니라 기존의 this를 유지하므로 b.sayName()의 this인 b가 유지된다.
const e = {
    name1 : 'qwer',
    sayName1() {
        const whatIsThis = () => {
            console.log(this);
        };
        whatIsThis();
    }
};
e.sayName1(); //{ name1: 'qwer', sayName1: [Function: sayName1] }

// 반대로 whatIsThis 함수를 함수 선언문으로 선언하면 this 는 기본 값이 window 가 된다.
const f = {
    name1 : 'qwer',
    sayName1() {
        const whatIsThis = function() {
            console.log(this);
        };
        whatIsThis();
    }
};
f.sayName1(); // window 객체