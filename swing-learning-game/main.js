// 1. 기본 설정
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x87CEEB); // 하늘색 배경
renderer.shadowMap.enabled = true;

// 2. 조명 설정
scene.add(new THREE.AmbientLight(0xffffff, 0.7));
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(30, 50, 20);
dirLight.castShadow = true;
dirLight.shadow.camera.top = 20;
dirLight.shadow.camera.bottom = -20;
dirLight.shadow.camera.left = -20;
dirLight.shadow.camera.right = 20;
scene.add(dirLight);

// 3. 바닥 만들기
const groundGeometry = new THREE.PlaneGeometry(100, 100);
const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x7CFC00 }); // 잔디색
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// 4. 그네 만들기
const swingSet = new THREE.Group();
const postMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); // 나무색
const postGeometry = new THREE.CylinderGeometry(0.2, 0.2, 8);

const post1 = new THREE.Mesh(postGeometry, postMaterial);
post1.position.set(-3, 4, 0);
post1.castShadow = true;
swingSet.add(post1);

const post2 = new THREE.Mesh(postGeometry, postMaterial);
post2.position.set(3, 4, 0);
post2.castShadow = true;
swingSet.add(post2);

const topBarGeometry = new THREE.CylinderGeometry(0.2, 0.2, 7);
const topBar = new THREE.Mesh(topBarGeometry, postMaterial);
topBar.rotation.z = Math.PI / 2;
topBar.position.y = 8;
topBar.castShadow = true;
swingSet.add(topBar);
scene.add(swingSet);

// 5. 그네와 로봇 만들기
const swing = new THREE.Group();
const ropeMaterial = new THREE.LineBasicMaterial({ color: 0x593b2b });
const ropeLength = 6;

const rope1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -ropeLength, 0)]), ropeMaterial);
rope1.position.x = -1;
swing.add(rope1);

const rope2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -ropeLength, 0)]), ropeMaterial);
rope2.position.x = 1;
swing.add(rope2);

const seatGeometry = new THREE.BoxGeometry(2.5, 0.2, 1);
const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x966F33 });
const seat = new THREE.Mesh(seatGeometry, seatMaterial);
seat.position.y = -ropeLength;
seat.castShadow = true;
swing.add(seat);

// --- 로봇 만들기 (서 있는 자세, 관절 추가) ---
const robot = new THREE.Group();
const torso = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1.5, 0.8),
    new THREE.MeshStandardMaterial({ color: 0xcccccc })
);
const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0xeeeeee })
);
const legMaterial = new THREE.MeshStandardMaterial({ color: 0xbbbbbb });
const upperLegHeight = 0.8;
const lowerLegHeight = 0.8;
const legWidth = 0.3;

// 왼쪽 다리 그룹
const leftLeg = new THREE.Group(); // 엉덩이 관절
const kneeLeft = new THREE.Group(); // 무릎 관절

// 오른쪽 다리 그룹
const rightLeg = new THREE.Group(); // 엉덩이 관절
const kneeRight = new THREE.Group(); // 무릎 관절

// 몸통과 머리 설정
torso.position.y = 0.75; // 몸통의 중심이 엉덩이(0,0,0)보다 0.75 위에 있도록
torso.castShadow = true;
head.position.y = 1.5 + 0.5; // 몸통 위에 머리
head.castShadow = true;
robot.add(torso, head);

// 왼쪽 다리 조립
leftLeg.position.x = -0.35;
const upperLeftLeg = new THREE.Mesh(new THREE.BoxGeometry(legWidth, upperLegHeight, legWidth), legMaterial);
upperLeftLeg.position.y = -upperLegHeight / 2;
upperLeftLeg.castShadow = true;
leftLeg.add(upperLeftLeg);

kneeLeft.position.y = -upperLegHeight;
leftLeg.add(kneeLeft);

const lowerLeftLeg = new THREE.Mesh(new THREE.BoxGeometry(legWidth, lowerLegHeight, legWidth), legMaterial);
lowerLeftLeg.position.y = -lowerLegHeight / 2;
lowerLeftLeg.castShadow = true;
kneeLeft.add(lowerLeftLeg);
robot.add(leftLeg);

// 오른쪽 다리 조립
rightLeg.position.x = 0.35;
const upperRightLeg = new THREE.Mesh(new THREE.BoxGeometry(legWidth, upperLegHeight, legWidth), legMaterial);
upperRightLeg.position.y = -upperLegHeight / 2;
upperRightLeg.castShadow = true;
rightLeg.add(upperRightLeg);

kneeRight.position.y = -upperLegHeight;
rightLeg.add(kneeRight);

const lowerRightLeg = new THREE.Mesh(new THREE.BoxGeometry(legWidth, lowerLegHeight, legWidth), legMaterial);
lowerRightLeg.position.y = -lowerLegHeight / 2;
lowerRightLeg.castShadow = true;
kneeRight.add(lowerRightLeg);
robot.add(rightLeg);

// 로봇을 시트 위에 세우기
const totalLegHeight = upperLegHeight + lowerLegHeight;
robot.position.y = -ropeLength + totalLegHeight; // 시트 높이 + 다리 길이
swing.add(robot);

// 그네를 상단 바에 매달기
swing.position.y = 8;
scene.add(swing);

// 6. 물리 및 AI 학습 시뮬레이션
const physics = {
    angle: Math.PI / 10, // 시작 각도
    angularVelocity: 0,
    angularAcceleration: 0,
    gravity: 9.8,
    damping: 0.9995, // 공기 저항을 줄여 에너지 보존율을 높임
};

const ai = {
    pumpStrength: 0.05, // 다리를 찰 때의 힘을 대폭 상향하여 한 바퀴 회전이 가능하도록 함
    pumpCooldown: 0, // 펌핑 후 재입력까지의 쿨다운
    pumpDuration: 20, // 펌핑 애니메이션 지속 시간 (프레임)
    // AI의 학습 목표: 각속도가 0에 가까워질 때 (스윙의 정점) 힘을 가한다.
    thinkAndAct: () => {
        if (ai.pumpCooldown > 0) return; // 쿨다운 중이면 AI도 행동하지 않음

        // 스윙의 방향이 바뀌었는지 (정점을 지났는지) 확인
        // (현재 속도와 이전 프레임 속도의 곱이 음수이면 방향이 바뀐 것)
        const justTurned = physics.angularVelocity * ai.lastAngularVelocity < 0;

        if (justTurned) {
            performPump();
        }
        
        ai.lastAngularVelocity = physics.angularVelocity;
    },
    lastAngularVelocity: 0,
};

// 펌핑(에너지 주입) 함수
function performPump() {
    if (ai.pumpCooldown > 0) return; // 쿨다운 중에는 실행 불가

    // 1. 물리적 힘 가하기
    // 올바른 펌핑 방향을 계산합니다.
    // 움직이는 중에는 움직이는 방향으로 힘을 가해 에너지를 더하고,
    // 정점(속도가 0)에서는 중앙을 향해 힘을 가해 방향 전환을 돕습니다.
    let pumpDirection;
    if (physics.angularVelocity !== 0) {
        // 움직이는 방향과 같은 방향으로 힘을 가함 (에너지 추가)
        pumpDirection = Math.sign(physics.angularVelocity);
    } else {
        // 정점에서는 중앙으로 힘을 가함 (방향 전환 가속)
        // (angle이 양수면 -1, 음수면 1)
        pumpDirection = -Math.sign(physics.angle);
    }

    // 정지 상태(angle:0, velocity:0)에서는 pumpDirection이 0이 되어 힘을 가하지 않음.
    if (pumpDirection !== 0) {
        physics.angularVelocity += ai.pumpStrength * pumpDirection;
    }

    // 2. 쿨다운 설정 (애니메이션 시작)
    ai.pumpCooldown = ai.pumpDuration;
}

// 사용자 입력 처리
document.addEventListener('keydown', (e) => {
    // 방향키 위 또는 스페이스바로 직접 가르치기
    if (e.code === 'ArrowUp' || e.code === 'Space') {
        performPump();
    }
});

function updateSwing() {
    // 1. 물리 계산 (단순 진자 운동)
    physics.angularAcceleration = -(physics.gravity / ropeLength) * Math.sin(physics.angle);
    physics.angularVelocity += physics.angularAcceleration * 0.016; // dt (델타 타임) 근사치
    physics.angularVelocity *= physics.damping; // 공기 저항 적용
    physics.angle += physics.angularVelocity * 0.016;

    // 2. AI가 생각하고 행동 (자동 모드)
    ai.thinkAndAct();

    // 3. 3D 모델에 물리 결과 적용
    swing.rotation.x = physics.angle;
    
    // 4. 로봇 펌핑 애니메이션 (앉았다 일어서기) 및 쿨다운 관리
    if (ai.pumpCooldown > 0) {
        // 펌핑 애니메이션 진행도 (0 -> 1)
        const progress = (ai.pumpDuration - ai.pumpCooldown) / ai.pumpDuration;
        // sin 함수를 이용해 부드러운 앉았다 일어서기 동작 생성 (0 -> 1 -> 0)
        const crouchAmount = Math.sin(progress * Math.PI);

        // 무릎 굽히기
        const kneeAngle = crouchAmount * 1.5; // 최대 1.5 라디안 (약 85도)
        kneeLeft.rotation.x = kneeAngle;
        kneeRight.rotation.x = kneeAngle;

        // 엉덩이도 함께 굽히기
        const hipAngle = crouchAmount * 0.5;
        leftLeg.rotation.x = -hipAngle;
        rightLeg.rotation.x = -hipAngle;

        // 상체도 자연스럽게 숙이기
        torso.rotation.x = hipAngle * 0.8;

        ai.pumpCooldown--;
    } else {
        // 애니메이션이 끝나면 모든 관절을 원위치로
        kneeLeft.rotation.x = 0;
        kneeRight.rotation.x = 0;
        leftLeg.rotation.x = 0;
        rightLeg.rotation.x = 0;
        torso.rotation.x = 0;
    }
}

// 7. 카메라 설정
camera.position.set(-12, 6, -12); // 45도 각도에서 바라보도록 위치 변경
camera.lookAt(0, 4, 0); // 카메라가 그네의 중심부를 바라보도록 설정

// 8. 애니메이션 루프
function animate() {
    requestAnimationFrame(animate);

    updateSwing();

    renderer.render(scene, camera);
}

// 9. 창 크기 조절 대응
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();