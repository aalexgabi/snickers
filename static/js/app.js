var canvas = document.getElementById('mainScene');
var ctx = canvas.getContext('2d');

var renderInterval = 1000;

var white = "rgb(255,255,255)";
var red = "rgb(200,0,0)";

function fillGridRect(color, x, y){
    fillRect(color, x * 10, y * 10, 10, 10);
}

function clearGridRect(x, y){
    clearRect(x * 10, y * 10, 10, 10);
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
    }
];
var direction = 'right';

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
            newHead.x += 1;
            break;
        case 'down':
            newHead.y += 1;
            break;
        case 'left':
            newHead.x -= 1;
            break;
        case 'up':
            newHead.y -= 1;
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

// Initialize scene
drawFullSnake();
// Render first frame
render();
