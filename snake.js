let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');

let snakeX = 200;
let snakeY = 200;
let direction = null;


function drawBackround() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 400, 400);
}



function drawSnake(){
    context.fillStyle = "white";
    context.fillRect(snakeX, snakeY, 20, 20);
}

function update () {
    if(direction == 'right'){
        snakeX = snakeX + 20;
    } else if(direction == 'left') {
        snakeX = snakeX - 20;
    }else if(direction == 'up') {
        snakeY = snakeY - 20;
    }else if(direction == 'down') {
        snakeY = snakeY + 20;
    }

    console.log(snakeX)
    drawBackround();
    drawSnake();
}

function changeDirection(event){
    // console.log('direction');
    if(event.code == 'ArrowUp'){
        direction = 'up';
    } else if( event.code == 'ArrowRight'){
        direction = 'right';
    }else if( event.code == 'ArrowLeft'){
        direction = 'left';
    }else if( event.code == 'ArrowDown'){
        direction = 'down';
    }
}

drawBackround();
drawSnake();
setInterval(update, 1000);
addEventListener('keydown', changeDirection);