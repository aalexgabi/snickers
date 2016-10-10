function setDirection(key) {
    var code = key.keyCode;
    //Up arrow pressed
    if (code == 38)
        direction = 'up';
    else if (code == 37)
        direction = 'left';
    else if (code == 39)
        direction = 'right';
    else if (code == 40)
        direction = 'down';
}

function fillGridRect(color, x, y){
    fillRect(color, x * gridSize, y * gridSize, 10, 10);
}

function clearGridRect(x, y){
    clearRect(x * gridSize, y * gridSize, 10, 10);
}

function fillRect(color, x, y, width, height) {
    // Sets the color to fill in the rectangle with
    ctx.fillStyle = color;
    // Creates fill
    ctx.fillRect(x , y, width, height);
}

function clearRect(x, y, width, height) {
    // Clear rectangle
    ctx.clearRect(x , y, width, height);
}

function drawFullSnake(){
    snake.forEach(function(snakePart){
        fillGridRect(red, snakePart.x, snakePart.y);
    })
};

function render() {
    // Call itself again to continue rendering according to game speed
    setTimeout(render, renderInterval);
    
    var head = snake[snake.length -1];
    var tail = snake[0];

    var newHead = {
        x: head.x,
        y: head.y
    };

    switch (direction) {
        case 'right':
            newHead.x = (canvas.width / gridSize + newHead.x + 1) % (canvas.width / gridSize);
            break;
        case 'down':
            newHead.y = (canvas.height / gridSize + newHead.y + 1) % (canvas.height / gridSize);
            break;
        case 'left':
            newHead.x = (canvas.width / gridSize + newHead.x - 1) % (canvas.width / gridSize);
            break;
        case 'up':
            newHead.y = (canvas.height / gridSize + newHead.y - 1) % (canvas.height / gridSize);
            break;
        default:
            throw new Error('Bad direction');
    }

    snake.push(newHead);
    snake.shift();

    fillGridRect(red, newHead.x, newHead.y);
    clearGridRect(tail.x, tail.y)

    // TODO: increase speed with each frame

    x++;
}

var canvas = document.getElementById('mainScene');
var ctx = canvas.getContext('2d');

var renderInterval = 10;
var red = "rgb(200,0,0)";

var gridSize = 10;
var x = 0;
var snake = [
    {
        x: 0,
        y: 0
    },
    {
        x: 1,
        y: 0
    },
    {
        x: 2,
        y: 0
    },
    {
        x: 3,
        y: 0
    },
    {
        x: 4,
        y: 0
    }
];
var direction = 'right';

//Ataching keyEventListener to var direction
window.addEventListener('keydown', this.setDirection, false);
// Initialize scene
drawFullSnake();
// Render first frame
render();
