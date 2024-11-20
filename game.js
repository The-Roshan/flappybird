const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Game constants
const birdWidth = 30;
const birdHeight = 30;
const gravity = 0.5;
const lift = -10; // Increased lift for better jumping
const pipeWidth = 50;
const pipeGapMin = 150; // Minimum gap size
const pipeGapMax = 200; // Maximum gap size
const pipeSpeed = 3;
const pipeSpacingMin = 50; // Minimum horizontal spacing between pipes

// Bird object
let bird = {
    x: 50,
    y: canvas.height / 2,
    width: birdWidth,
    height: birdHeight,
    velocity: 0,
    lift: lift,
};

// Pipe array and tracking variables
let pipes = [];
let lastPipeX = 0; // Keeps track of the x-position of the last pipe
let score = 0;
let gameOver = false;

// Listen for bird controls
document.addEventListener("keydown", () => {
    if (!gameOver) {
        bird.velocity = bird.lift;
    }
});

// Create pipes with spacing constraints
function createPipes() {
    if (pipes.length === 0 || canvas.width - lastPipeX > pipeSpacingMin) {
        const pipeGap = Math.floor(
            Math.random() * (pipeGapMax - pipeGapMin) + pipeGapMin
        ); // Random gap size within the range
        const pipeHeight = Math.floor(
            Math.random() * (canvas.height - pipeGap - 50)
        ); // Ensure pipes stay within bounds
        pipes.push({
            x: canvas.width,
            top: pipeHeight,
            bottom: pipeHeight + pipeGap,
        });
        lastPipeX = canvas.width; // Update last pipe position
    }
}

// Draw bird
function drawBird() {
    bird.velocity += gravity;
    bird.y += bird.velocity;

    // Prevent the bird from going out of the frame (top and bottom boundaries)
    if (bird.y < 0) {
        bird.y = 0;
        bird.velocity = 0;
    } else if (bird.y + bird.height > canvas.height) {
        bird.y = canvas.height - bird.height;
        bird.velocity = 0;
    }

    ctx.fillStyle = "yellow";
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

// Draw pipes
function drawPipes() {
    pipes.forEach((pipe, index) => {
        // Move pipes
        pipe.x -= pipeSpeed;

        // Draw pipes
        ctx.fillStyle = "green";
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top); // Top pipe
        ctx.fillRect(pipe.x, pipe.bottom, pipeWidth, canvas.height - pipe.bottom); // Bottom pipe

        // Remove pipes that are out of view
        if (pipe.x + pipeWidth < 0) {
            pipes.splice(index, 1);
            score++;
        }

        // Detect collision
        if (bird.x + bird.width > pipe.x && bird.x < pipe.x + pipeWidth) {
            if (bird.y < pipe.top || bird.y + bird.height > pipe.bottom) {
                gameOver = true;
            }
        }
    });
}

// Draw score
function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}

// Restart the game
function restartGame() {
    bird.y = canvas.height / 2;
    bird.velocity = 0;
    pipes = [];
    score = 0;
    gameOver = false;
    lastPipeX = 0; // Reset last pipe position
    document.getElementById("restartButton").disabled = true; // Disable the restart button during the game
    gameLoop();
}

// Main game loop
function gameLoop() {
    if (gameOver) {
        ctx.fillStyle = "red";
        ctx.font = "30px Arial";
        ctx.fillText("Game Over!", canvas.width / 4, canvas.height / 2);
        document.getElementById("restartButton").disabled = false; // Enable the restart button
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBird();
    drawPipes();
    drawScore();

    createPipes();

    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
