// 1. 클래스로 객체를 생성하는 방법

/* 생성자 함수
function Monster(name, hp, att) {
    this.name = name;
    this.hp = hp;
    this.att = att;
}
*/

// 생성자 함수 -> 클래스로 변경하면...
// 클래스 문법의 장점은 속성과 메서드를 하나로 묶을 수 있다는 것.
class Monster {
    constructor(name, hp, att) {
        this.name = name;
        this.hp = hp;
        this.att = att;
    }
    attack(monster) {
        monster.hp -= this.att;
    }
}

const monster1 = new Monster('슬라임', 25, 10);
const monster2 = new Monster('슬라임', 26, 9);
const monster3 = new Monster('슬라임', 25, 11);

console.log(monster1); // Monster { name: '슬라임', hp: 25, att: 10 }
console.log(monster2); // Monster { name: '슬라임', hp: 26, att: 9 }
console.log(monster3); // Monster { name: '슬라임', hp: 25, att: 11 }

// 클래스 예제
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log(this.name);
    }
    sayAge() {
        console.log(this.age);
    }
}

const human1 = new Human('히나', 24);
const human2 = new Human('시요밍', 25);
console.log(human1); // Human { name: '히나', age: 24 }
console.log(human2); // Human { name: '시요밍', age: 25 }

