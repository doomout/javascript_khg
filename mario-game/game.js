const player = document.getElementById('player');
const platforms = document.querySelectorAll('.platform');
const goal = document.getElementById('goal');
const gameContainer = document.getElementById('game-container');

let playerX = 50;
let playerY = 0; // Distance from the bottom of the game container
let playerSpeedX = 0;
let playerSpeedY = 0;
const gravity = 0.5;
const jumpStrength = 12; // Positive for upward movement
let isJumping = false;
const moveSpeed = 5;
let gameEnded = false;

const keys = {
    left: false,
    right: false,
    up: false
};

// Helper function for AABB collision detection
function checkCollision(rect1, rect2) {
    return rect1.left < rect2.right &&
           rect1.right > rect2.left &&
           rect1.bottom < rect2.top &&
           rect1.top > rect2.bottom;
}

function gameLoop() {
    if (gameEnded) {
        return; // Stop game loop if game has ended
    }

    // 1. Handle horizontal movement
    if (keys.left) {
        playerSpeedX = -moveSpeed;
    } else if (keys.right) {
        playerSpeedX = moveSpeed;
    } else {
        playerSpeedX = 0;
    }

    // 2. Apply gravity
    playerSpeedY -= gravity;

    // Calculate potential new positions
    let newPlayerX = playerX + playerSpeedX;
    let newPlayerY = playerY + playerSpeedY;

    // Reset onPlatform flag for current frame
    let onPlatformThisFrame = false;

    // --- Horizontal Collision Resolution ---
    platforms.forEach(platform => {
        const platformLeft = platform.offsetLeft;
        const platformRight = platform.offsetLeft + platform.offsetWidth;
        const platformBottom = gameContainer.offsetHeight - (platform.offsetTop + platform.offsetHeight);
        const platformTop = gameContainer.offsetHeight - platform.offsetTop;

        const playerRectAtNewX = {
            left: newPlayerX,
            right: newPlayerX + player.offsetWidth,
            bottom: playerY,
            top: playerY + player.offsetHeight
        };

        const platformRect = {
            left: platformLeft,
            right: platformRight,
            bottom: platformBottom,
            top: platformTop
        };

        if (checkCollision(playerRectAtNewX, platformRect)) {
            // If moving right and hit platform from left
            if (playerSpeedX > 0) {
                newPlayerX = platformLeft - player.offsetWidth;
                playerSpeedX = 0;
            }
            // If moving left and hit platform from right
            else if (playerSpeedX < 0) {
                newPlayerX = platformRight;
                playerSpeedX = 0;
            }
        }
    });

    // Update playerX after horizontal collision resolution
    playerX = newPlayerX;

    // Prevent player from going out of horizontal bounds
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX + player.offsetWidth > gameContainer.offsetWidth) {
        playerX = gameContainer.offsetWidth - player.offsetWidth;
    }

    // --- Vertical Collision Resolution ---
    platforms.forEach(platform => {
        const platformLeft = platform.offsetLeft;
        const platformRight = platform.offsetLeft + platform.offsetWidth;
        const platformBottom = gameContainer.offsetHeight - (platform.offsetTop + platform.offsetHeight);
        const platformTop = gameContainer.offsetHeight - platform.offsetTop;

        const playerRectAtNewY = {
            left: playerX, // Use resolved X for vertical collision check
            right: playerX + player.offsetWidth,
            bottom: newPlayerY,
            top: newPlayerY + player.offsetHeight
        };

        const platformRect = {
            left: platformLeft,
            right: platformRight,
            bottom: platformBottom,
            top: platformTop
        };

        if (checkCollision(playerRectAtNewY, platformRect)) {
            // If player is falling and lands on top of the platform
            if (playerSpeedY < 0) {
                // Check if player was above the platform before moving
                if (playerY >= platformTop) {
                    newPlayerY = platformTop; // Snap player to top of platform
                    playerSpeedY = 0;
                    isJumping = false;
                    onPlatformThisFrame = true;
                }
            }
            // If player is jumping up and hits the bottom of the platform
            else if (playerSpeedY > 0) {
                // Check if player was below the platform before moving
                if (playerY + player.offsetHeight <= platformBottom) {
                    newPlayerY = platformBottom - player.offsetHeight; // Snap player to bottom of platform
                    playerSpeedY = 0;
                }
            }
        }
    });

    // Update playerY after vertical collision resolution
    playerY = newPlayerY;

    // Floor collision
    if (playerY < 0) {
        playerY = 0;
        playerSpeedY = 0;
        isJumping = false;
        onPlatformThisFrame = true;
    }

    // Update isJumping based on whether player is on any platform or floor
    // This is important for allowing jumps only when on a surface
    if (onPlatformThisFrame) {
        isJumping = false;
    }

    // Handle jumping
    if (keys.up && !isJumping) {
        playerSpeedY = jumpStrength;
        isJumping = true;
    }

    // Update player position in DOM
    player.style.left = playerX + 'px';
    player.style.bottom = playerY + 'px';

    // Check for goal collision
    const goalLeft = goal.offsetLeft;
    const goalRight = goal.offsetLeft + goal.offsetWidth;
    const goalBottom = gameContainer.offsetHeight - (goal.offsetTop + goal.offsetHeight);
    const goalTop = gameContainer.offsetHeight - goal.offsetTop;

    const finalPlayerRect = {
        left: playerX,
        right: playerX + player.offsetWidth,
        bottom: playerY,
        top: playerY + player.offsetHeight
    };

    if (
        checkCollision(finalPlayerRect, {
            left: goalLeft,
            right: goalRight,
            bottom: goalBottom,
            top: goalTop
        })
    ) {
        if (!gameEnded) {
            alert('You win!');
            gameEnded = true;
        }
    }

    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        keys.left = true;
    } else if (e.key === 'ArrowRight') {
        keys.right = true;
    } else if (e.key === 'ArrowUp') {
        keys.up = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') {
        keys.left = false;
    } else if (e.key === 'ArrowRight') {
        keys.right = false;
    } else if (e.key === 'ArrowUp') {
        keys.up = false;
    }
});

gameLoop();