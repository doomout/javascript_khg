// 클래스 : 객체를 생성하기 위한 템플릿(서식), ES2015에서 추가

// 함수로 객체를 생성하는 방법
// 공장 함수
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

// 생성자 함수
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