// define a circle object
var circle = {
    diameter: Math.random() * 50, // start with random diameter
    xCoor: 0,
    yCoor: 0,
    color: [Math.random() * 255, Math.random() * 255, Math.random() * 255], // start with random color
    xSpeed: 20,
    ySpeed: 10
}

function setup() {
    createCanvas(640, 480);
    // random background color
    background(Math.random() * 256, Math.random() * 256, Math.random() * 256);
    frameRate(30);
}

function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    
    // if we hit edge of canvas
    if(circle.xCoor > 640 || circle.xCoor < 0){
        // random color
        circle.color = [Math.random() * 255, Math.random() * 255, Math.random() * 255]
        // reverse direction
        circle.xSpeed = -circle.xSpeed;
    }
    if(circle.yCoor > 480 || circle.yCoor < 0){
        circle.diameter = Math.random() * 50;
        circle.ySpeed = -circle.ySpeed;
    }
    
    // move circle across screen
    circle.xCoor += circle.xSpeed;
    circle.yCoor += circle.ySpeed;
}