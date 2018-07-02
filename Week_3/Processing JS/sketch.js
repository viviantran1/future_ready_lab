// define a circle object
var circle = {
    diameter: Math.random() * 50,
    xCoor: 0,
    yCoor: 0,
    color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
    xSpeed: 20,
    ySpeed: 10
}

function setup() {
    createCanvas(640, 480);
    background(Math.random() * 255, Math.random() * 255, Math.random() * 255);
    frameRate(30);
}

function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    console.log("The x speed is " + circle.xSpeed);
    
    // if we hit right edge of canvas
    if(circle.xCoor > 640){
        circle.color = [Math.random() * 255, Math.random() * 255, Math.random() * 255]
        circle.xSpeed = -circle.xSpeed; // reverse direction
    } else if(circle.xCoor < 0){
        circle.color = [Math.random() * 255, Math.random() * 255, Math.random() * 255]
        circle.xSpeed = -circle.xSpeed;
    } else if(circle.yCoor > 480){
        circle.diameter = Math.random() * 50;
        circle.ySpeed = -circle.ySpeed;
    } else if(circle.yCoor < 0) {
        circle.diameter = Math.random() * 50;
        circle.ySpeed = -circle.ySpeed;
    }
    
    circle.xCoor += circle.xSpeed;
    circle.yCoor += circle.ySpeed;
}