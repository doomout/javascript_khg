// 1. 기본 설정
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x87CEEB); // 하늘색 배경
renderer.shadowMap.enabled = true;

// 2. 조명 설정
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(20, 50, 20);
directionalLight.castShadow = true;
directionalLight.shadow.camera.top = 30;
directionalLight.shadow.camera.bottom = -30;
directionalLight.shadow.camera.left = -30;
directionalLight.shadow.camera.right = 30;
scene.add(directionalLight);

// 3. 바닥 만들기
const groundGeometry = new THREE.PlaneGeometry(500, 500);
const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x556B2F }); // 짙은 녹색
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// 4. 자동차 만들기
const car = new THREE.Group();

// 자동차 몸체
const bodyGeometry = new THREE.BoxGeometry(2, 0.8, 4);
const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // 빨간색
const carBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
carBody.castShadow = true;
car.add(carBody);

// 자동차 바퀴
const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 });

const wheels = [];
const wheelPositions = [
    { x: -1.1, y: -0.4, z: 1.5 }, // 앞 왼쪽
    { x: 1.1, y: -0.4, z: 1.5 },  // 앞 오른쪽
    { x: -1.1, y: -0.4, z: -1.5 },// 뒤 왼쪽
    { x: 1.1, y: -0.4, z: -1.5 }  // 뒤 오른쪽
];

wheelPositions.forEach(pos => {
    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(pos.x, pos.y, pos.z);
    wheel.castShadow = true;
    wheels.push(wheel);
    car.add(wheel);
});

scene.add(car);

// 5. 자동차 제어
const keys = {};
document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

let speed = 0;
let acceleration = 0.02;
let deceleration = 0.01;
let maxSpeed = 1;
let steering = 0;
let steeringAmount = 0.04;

function updateCar() {
    // 가속 및 감속
    if (keys['ArrowUp']) {
        speed = Math.min(maxSpeed, speed + acceleration);
    } else if (keys['ArrowDown']) {
        speed = Math.max(-maxSpeed / 2, speed - acceleration);
    } else {
        if (speed > 0) {
            speed = Math.max(0, speed - deceleration);
        } else {
            speed = Math.min(0, speed + deceleration);
        }
    }

    // 회전
    if (speed !== 0) {
        const turnDirection = speed > 0 ? 1 : -1;
        if (keys['ArrowLeft']) {
            steering += steeringAmount;
        } else if (keys['ArrowRight']) {
            steering -= steeringAmount;
        }
    }

    car.rotation.y = steering;
    car.position.x += speed * Math.sin(car.rotation.y);
    car.position.z += speed * Math.cos(car.rotation.y);

    // 바퀴 회전
    const wheelRotation = speed * 0.5;
    wheels.forEach(wheel => {
        wheel.rotation.x += wheelRotation;
    });
}

// 6. 카메라 설정
camera.position.set(0, 5, -10);
camera.lookAt(car.position);

function updateCamera() {
    // 자동차 뒤를 따라다니는 카메라
    const idealOffset = new THREE.Vector3(0, 4, -8);
    idealOffset.applyQuaternion(car.quaternion);
    idealOffset.add(car.position);

    camera.position.lerp(idealOffset, 0.1); // 부드럽게 이동
    camera.lookAt(car.position);
}

// 7. 애니메이션 루프
function animate() {
    requestAnimationFrame(animate);

    updateCar();
    updateCamera();

    renderer.render(scene, camera);
}

// 8. 창 크기 조절 대응
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();