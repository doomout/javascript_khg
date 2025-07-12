const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const powerInput = document.getElementById('power');
const powerValueSpan = document.getElementById('power-value');
const messageEl = document.getElementById('message');
const triesInfoEl = document.getElementById('tries-info');

// 게임 상수 및 변수
const gravity = 0.2;
let projectile = null;
let isFiring = false;
let tryCount = 0;
const mouse = { x: 0, y: 0 };

// 포
const cannon = {
    x: 50,
    y: canvas.height - 50,
    width: 50,
    height: 30,
    angle: -Math.PI / 4 // 초기 각도 45도
};

// 목표물
const target = {
    x: 0,
    y: 0,
    width: 40,
    height: 40
};

// 발사체 클래스
class Projectile {
    constructor(x, y, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.vx = velocityX;
        this.vy = velocityY;
        this.radius = 5;
    }

    update() {
        this.vy += gravity; // 중력 적용
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
    }
}

// 그리기 함수
function draw() {
    // 캔버스 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 땅 그리기
    ctx.fillStyle = '#228B22'; // ForestGreen
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

    // 포 그리기
    ctx.save();
    ctx.translate(cannon.x, cannon.y);
    ctx.rotate(cannon.angle);
    ctx.fillStyle = '#333';
    ctx.fillRect(0, -cannon.height / 2, cannon.width, cannon.height);
    ctx.restore();

    // 목표물 그리기
    ctx.fillStyle = 'red';
    ctx.fillRect(target.x, target.y, target.width, target.height);

    // 발사체 그리기
    if (projectile) {
        projectile.draw();
    }
}

// 게임 루프
function gameLoop() {
    if (isFiring && projectile) {
        projectile.update();

        // 충돌 감지
        if (
            projectile.x > target.x &&
            projectile.x < target.x + target.width &&
            projectile.y > target.y &&
            projectile.y < target.y + target.height
        ) {
            messageEl.textContent = `${tryCount}번 만에 명중! 새로운 목표물이 생성됩니다.`;
            messageEl.style.color = 'green';
            isFiring = false;
            projectile = null;
            setTimeout(resetTarget, 1500);
        }
        // 화면 밖으로 나갔는지 확인 (명중하지 않았을 경우에만)
        else if (projectile.y > canvas.height || projectile.x > canvas.width || projectile.x < 0) {
            messageEl.textContent = '아깝네요! 다시 시도하세요.';
            messageEl.style.color = 'red';
            isFiring = false;
            projectile = null;
        }
    }

    // 포 각도 업데이트
    if (!isFiring) {
        const dx = mouse.x - cannon.x;
        const dy = mouse.y - cannon.y;
        cannon.angle = Math.atan2(dy, dx);
    }

    draw();
    requestAnimationFrame(gameLoop);
}

// 발사 함수
function fire() {
    if (isFiring) return;

    tryCount++;
    triesInfoEl.textContent = `시도 횟수: ${tryCount}`;

    isFiring = true;
    messageEl.textContent = '';

    const power = parseFloat(powerInput.value) / 5; // 파워 스케일 조정

    // 현재 포의 각도를 사용
    const rad = cannon.angle;

    // 초기 속도 계산
    const velocityX = power * Math.cos(rad);
    const velocityY = power * Math.sin(rad);

    // 포구 위치 계산 (포 회전을 고려)
    const cannonTipX = cannon.x + (cannon.width * Math.cos(rad));
    const cannonTipY = cannon.y + (cannon.width * Math.sin(rad));

    projectile = new Projectile(cannonTipX, cannonTipY, velocityX, velocityY);
}

// 목표물 리셋 함수
function resetTarget() {
    // 캔버스 오른쪽 절반에 랜덤하게 위치
    target.x = Math.random() * (canvas.width / 2 - target.width) + (canvas.width / 2);

    // 50% 확률로 하늘에, 50% 확률로 땅에 생성
    if (Math.random() < 0.5) {
        // 땅 위에 위치
        target.y = canvas.height - 50 - target.height;
    } else {
        // 하늘에 랜덤하게 위치 (y: 100 ~ 400)
        target.y = Math.random() * 300 + 100;
    }

    tryCount = 0;
    triesInfoEl.textContent = `시도 횟수: 0`;
    messageEl.textContent = '';
    draw();
}

// 이벤트 리스너
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});

canvas.addEventListener('click', fire);

powerInput.addEventListener('input', (e) => {
    powerValueSpan.textContent = e.target.value;
});

// 게임 시작
resetTarget();
gameLoop();