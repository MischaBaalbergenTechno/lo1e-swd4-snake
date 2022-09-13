let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');

let snakeX = 200;
let snakeY = 200;

function drawBackround() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 400, 400);
}


drawSnake();

function drawSnake(){
    context.fillStyle = "white";
    context.fillRect(snakeX, snakeY, 20, 20);
}

function update () {
    snakeX = snakeX + 20;
    console.log(snakeX)
    drawBackround();
    drawSnake();
    
}

drawBackround();
drawSnake();
setInterval(update, 1000);