const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game state
let score = 0;
let gameOver = false;
const keys = {};

// Player
const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 60,
    width: 50,
    height: 50,
    speed: 5,
    bulletLevel: 1,
};

// Bullets
const bullets = [];
const bulletSpeed = 7;
let bulletCooldown = 0;
const bulletCooldownTime = 15; // frames

// Enemy Bullets
const enemyBullets = [];
const enemyBulletSpeed = 4;

// Enemies
const enemies = [];
const enemyColors = ['#FF4136', '#FF851B', '#B10DC9', '#2ECC40', '#0074D9']; // 빨강, 주황, 보라, 초록, 파랑
let enemySpawnTimer = 0;
const enemySpawnInterval = 60; // 60프레임(약 1초)마다 적 생성

// Power-ups
const powerUps = [];

// Event Listeners
document.addEventListener('keydown', (e) => {
    keys[e.code] = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});

function movePlayer() {
    if (keys.ArrowLeft && player.x > 0) {
        player.x -= player.speed;
    }
    if (keys.ArrowRight && player.x < canvas.width - player.width) {
        player.x += player.speed;
    }
    if (keys.ArrowUp && player.y > 0) {
        player.y -= player.speed;
    }
    if (keys.ArrowDown && player.y < canvas.height - player.height) {
        player.y += player.speed;
    }
}

function handleShooting() {
    if (bulletCooldown > 0) {
        bulletCooldown--;
    }

    const createBullet = (spread) => {
        return {
            x: player.x + player.width / 2 - 2.5,
            y: player.y,
            width: 5,
            height: 10,
            speed: bulletSpeed,
            spread: spread, // 수평 이동 속도 계수
        };
    };

    if (keys.Space && bulletCooldown === 0) {
        const level = player.bulletLevel;
        const baseSpread = 0.25;

        // 홀수 레벨은 중앙에 한 발 발사
        if (level % 2 === 1) {
            bullets.push(createBullet(0));
        }

        // 레벨에 따라 양쪽으로 발사
        for (let i = 1; i <= Math.floor(level / 2); i++) {
            bullets.push(createBullet(i * baseSpread));
            bullets.push(createBullet(-i * baseSpread));
        }

        bulletCooldown = bulletCooldownTime; // 쿨타임 초기화
    }
}

function spawnEnemies() {
    enemySpawnTimer++;
    if (enemySpawnTimer > enemySpawnInterval) {
        const size = Math.random() * 20 + 20; // 20~40 사이의 랜덤 크기
        const x = Math.random() * (canvas.width - size);
        const speed = Math.random() * 2 + 1; // 1~3 사이의 랜덤 속도
        const color = enemyColors[Math.floor(Math.random() * enemyColors.length)];
        const enemy = {
            x: x,
            y: -size,
            width: size,
            height: size,
            speed: speed,
            color: color,
            shootCooldown: 60, // 초기 발사 쿨다운
            shootInterval: Math.floor(Math.random() * 50) + 100 // 100~150 프레임마다 발사
        };
        enemies.push(enemy);
        enemySpawnTimer = 0;
    }
}

function updateEntities() {
    // 총알 이동
    for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.y -= b.speed;
        b.x += b.spread * b.speed; // 부채꼴 모양으로 퍼지도록 x좌표 변경
        if (b.y < 0 || b.x < 0 || b.x > canvas.width) {
            bullets.splice(i, 1);
        }
    }

    // 적 이동
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        enemy.y += enemy.speed;

        // 적이 화면을 벗어나면 제거
        if (enemy.y > canvas.height) {
            enemies.splice(i, 1);
            continue;
        }

        // 적 공격 로직 (화면 안에 있을 때만)
        enemy.shootCooldown--;
        if (enemy.shootCooldown <= 0 && enemy.y > 0) {
            const enemyBullet = {
                x: enemy.x + enemy.width / 2 - 2.5,
                y: enemy.y + enemy.height,
                width: 5,
                height: 10,
                speed: enemyBulletSpeed
            };
            enemyBullets.push(enemyBullet);
            enemy.shootCooldown = enemy.shootInterval; // 쿨다운 초기화
        }
    }

    // 적 총알 이동
    for (let i = enemyBullets.length - 1; i >= 0; i--) {
        enemyBullets[i].y += enemyBullets[i].speed;
        if (enemyBullets[i].y > canvas.height) {
            enemyBullets.splice(i, 1);
        }
    }

    // 파워업 아이템 이동
    for (let i = powerUps.length - 1; i >= 0; i--) {
        powerUps[i].y += powerUps[i].speed;
        if (powerUps[i].y > canvas.height) {
            powerUps.splice(i, 1);
        }
    }
}

function checkCollisions() {
    // 총알과 적의 충돌
    for (let i = enemies.length - 1; i >= 0; i--) {
        for (let j = bullets.length - 1; j >= 0; j--) {
            if (!enemies[i] || !bullets[j]) continue;

            if (
                bullets[j].x < enemies[i].x + enemies[i].width &&
                bullets[j].x + bullets[j].width > enemies[i].x &&
                bullets[j].y < enemies[i].y + enemies[i].height &&
                bullets[j].y + bullets[j].height > enemies[i].y
            ) {
                const enemy = enemies[i];
                // 10% 확률로 파워업 아이템 드랍
                if (Math.random() < 0.1) {
                    powerUps.push({
                        x: enemy.x + enemy.width / 2 - 10,
                        y: enemy.y,
                        width: 20,
                        height: 20,
                        speed: 2,
                    });
                }
                enemies.splice(i, 1);
                bullets.splice(j, 1);
                score += 10;
                break;
            }
        }
    }

    // 플레이어와 파워업 아이템 충돌
    for (let i = powerUps.length - 1; i >= 0; i--) {
        const p = powerUps[i];
        if (
            player.x < p.x + p.width &&
            player.x + player.width > p.x &&
            player.y < p.y + p.height &&
            player.y + player.height > p.y
        ) {
            if (player.bulletLevel < 5) {
                player.bulletLevel++;
            }
            powerUps.splice(i, 1);
        }
    }


    // 플레이어와 적의 충돌
    for (let i = enemies.length - 1; i >= 0; i--) {
        if (
            player.x < enemies[i].x + enemies[i].width &&
            player.x + player.width > enemies[i].x &&
            player.y < enemies[i].y + enemies[i].height &&
            player.y + player.height > enemies[i].y
        ) {
            gameOver = true;
        }
    }

    // 플레이어와 적 총알의 충돌
    for (let i = enemyBullets.length - 1; i >= 0; i--) {
        const bullet = enemyBullets[i];
        if (
            player.x < bullet.x + bullet.width &&
            player.x + player.width > bullet.x &&
            player.y < bullet.y + bullet.height &&
            player.y + player.height > bullet.y
        ) {
            gameOver = true;
            return; // 게임 오버이므로 더 이상 충돌 검사 필요 없음
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 플레이어 그리기 (삼각형 모양)
    ctx.fillStyle = 'cyan';
    ctx.beginPath();
    ctx.moveTo(player.x + player.width / 2, player.y);
    ctx.lineTo(player.x, player.y + player.height);
    ctx.lineTo(player.x + player.width, player.y + player.height);
    ctx.closePath();
    ctx.fill();

    // 총알 그리기
    ctx.fillStyle = 'yellow';
    bullets.forEach(bullet => {
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });

    // 적 총알 그리기
    ctx.fillStyle = 'orange';
    enemyBullets.forEach(bullet => {
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });

    // 파워업 아이템 그리기
    ctx.fillStyle = 'lime';
    ctx.font = 'bold 16px Arial';
    powerUps.forEach(p => {
        ctx.fillRect(p.x, p.y, p.width, p.height);
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('P', p.x + p.width / 2, p.y + p.height / 2);
        ctx.fillStyle = 'lime'; // 다음 아이템을 위해 색상 복원
    });

    // 적 그리기
    enemies.forEach(enemy => {
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });

    // UI 그리기
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'left';
    ctx.fillText(`Score: ${score}`, 10, 30);
    ctx.textAlign = 'right';
    ctx.fillText(`Power: ${player.bulletLevel}`, canvas.width - 10, 30);

    // 게임 오버 화면
    if (gameOver) {
        ctx.fillStyle = 'white';
        ctx.font = '40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2);
        ctx.font = '20px Arial';
        ctx.fillText(`Final Score: ${score}`, canvas.width / 2, canvas.height / 2 + 40);
        ctx.fillText('Refresh to play again', canvas.width / 2, canvas.height / 2 + 80);
    }
}

function gameLoop() {
    if (gameOver) {
        draw(); // 마지막 게임 오버 화면 그리기
        return;
    }

    movePlayer();
    handleShooting();
    spawnEnemies();
    updateEntities();
    checkCollisions();
    draw();

    requestAnimationFrame(gameLoop);
}

// 게임 시작
gameLoop();