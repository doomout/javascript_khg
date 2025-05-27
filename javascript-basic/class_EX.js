// 클래스 : 객체를 생성하기 위한 템플릿(서식), ES2015에서 추가

// 함수로 객체를 생성하는 방법
// 공장 함수
function createMonster(name, hp, att) {
    return { name, hp, att };
}
const monster1 = createMonster('슬라임', 25, 10);
const monster2 = createMonster('슬라임', 26, 9);
const monster3 = createMonster('슬라임', 25, 11);

// 생성자 함수
function Monster(name, hp, att) {
    this.name = name;
    this.hp = hp;
    this.att = att;
}
const monster4 = new Monster('슬라임', 25, 10);
const monster5 = new Monster('슬라임', 26, 9);
const monster6 = new Monster('슬라임', 25, 11);