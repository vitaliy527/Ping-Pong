const Map = document.querySelector("#game");
const canvas = Map.getContext('2d');
canvas.fillStyle = 'rgb(228, 164, 87)';

const grid = 15;
const paddleHeight = grid * 5;
const maxPaddlyY = Map.height - grid - paddleHeight;

let ballSpeed = 5;
let paddleSpeed = 7;

const leftPaddle = {
    x:grid * 2,
    y:Map.height/2 - paddleHeight/2,
    width:grid,
    height:paddleHeight,
    dy:0
}

const rightPaddle = {
    x:Map.width - grid * 3,
    y:Map.height / 2 - paddleHeight / 2,
    width:grid,
    height:paddleHeight,
    dy:0
}

const ball = {
    x:Map.width / 2,
    y:Map.height / 2,
    width:grid,
    height:grid,
    resetting:false,
    isResetted:false,
    dx:ballSpeed,
    dy:-ballSpeed
}

function renderMap() {
    canvas.fillRect(0, 0, Map.width, grid); // Верхняя граница
    canvas.fillRect(0, Map.height - grid, Map.width, grid) // Нижняя граница

    for (let i = grid; i < Map.height - grid; i += grid * 2) {
        canvas.fillRect(Map.width / 2, i, grid, grid); // Разделительная линия
    }
}

function clearMap() {
    canvas.clearRect(0, 0, Map.width, Map.height);
}

function renderLeftPaddle() {
    canvas.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
}

function renderRightPaddle() {
    canvas.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
}
function renderBall() {
    canvas.fillRect(ball.x, ball.y, ball.width, ball.height);
}

function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}

function movePaddles() {
    leftPaddle.y += leftPaddle.dy;
    rightPaddle.y += rightPaddle.dy;
}

function loop () {
    clearMap();
    renderBall()
    
    renderLeftPaddle();
    renderRightPaddle();
    movePaddles();
    moveBall();
    renderMap();
    requestAnimationFrame(loop);
}
document.addEventListener('keydown', (event) =>{
    if (event.key === 'w' || event.key === 'ц'){
        leftPaddle.dy = -paddleSpeed;
    }else if(event.key === 's' || event.key === 'ы'){
        leftPaddle.dy = paddleSpeed;
    }

})
document.addEventListener('keyup', (event) =>{
    if (event.key === 'w' || event.key === 'ц' || event.key === 's' || event.key === 'ы'){
        leftPaddle.dy = 0;
    } 
})
requestAnimationFrame(loop);