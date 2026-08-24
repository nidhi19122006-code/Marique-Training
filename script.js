const player = document.querySelector(".player");
const world = document.querySelector(".world");


let playerX = 50;
let playerY = 70;

let worldX = 0;

let moveRight = false;
let moveLeft = false;

let velocityX = 0;

let velocityY = 0;
let gravity = 0.8;
let isJumping = false;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        moveRight = true;

        // running
        player.style.backgroundImage = "url('assets/mario-running-8-bit-sticker-21z0o619xzhlxhss.gif')"

        // face right
        player.style.transform = "scaleX(1)"

    }
    if (e.key === "ArrowLeft") {
        moveLeft = true;

        // running
        player.style.backgroundImage = "url('assets/mario-running-8-bit-sticker-21z0o619xzhlxhss.gif')"

        // face left
        player.style.transform = "scaleX(-1)"
    }
});
document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") {
        moveRight = false;
        
    }
    if (e.key === "ArrowLeft") {
        moveLeft = false;
    }
});
document.addEventListener("keydown", (e) => {
    if (
        (e.key === " " || e.key === "ArrowUp")
        &&
        !isJumping
    ) {
        velocityY = 15;
        isJumping = true;
    }
});
function gameLoop() {
    if (!isJumping) {
        if (moveRight) {
            if (playerX < 450) {
                playerX += 3;
            }
            else {
                worldX -= 4;
            }
        }

        if (moveLeft) {
            if (playerX > 70) {
                playerX -= 3;
            }
            else if(worldX< 0) {
                worldX += 4;
            }
        }
    }

    if (isJumping) {
        if (moveRight) {
            velocityX = 3;
        }
        if (moveLeft) {
            velocityX = -3;
        }
        if (!moveRight && !moveLeft) {
            velocityX = 0;
        }
        playerX += velocityX;
    }

    velocityY -= gravity;
    playerY += velocityY;

    if (playerY <= 70) {
        playerY = 70;
        velocityY = 0;
        velocityX = 0;
        isJumping = false;
    }

    player.style.left = playerX + "px";
    player.style.bottom = playerY + "px";


    world.style.transform =
        `translateX(${worldX}px)`;

    requestAnimationFrame(gameLoop);
}


gameLoop();