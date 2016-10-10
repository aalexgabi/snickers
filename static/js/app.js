var canvas = document.getElementById('mainScene');
var ctx = canvas.getContext('2d');

var renderInterval = 1000;

var white = "rgb(255,255,255)";
var red = "rgb(200,0,0)";

function fillRect(color, x, y, width, height) {
    // Sets the color to fill in the rectangle with
    ctx.fillStyle = color;
    // Creates fill
    ctx.fillRect(x , y, width, height);
}

var x = 0;

function render() {
    // Call itself again to continue rendering according to game speed
    setTimeout(render, renderInterval);

    fillRect(red, 10 * x, 10, 10, 10);
    fillRect(white, 10 * (x - 1), 10, 10, 10);

    // TODO: increase speed with each frame

    x++;
}

// Render first frame
render();
