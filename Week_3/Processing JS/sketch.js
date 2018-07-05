// define a circle object
/*
var circle = {
    diameter: Math.random() * 50, // start with random diameter
    xCoor: 0,
    yCoor: 0,
    color: [Math.random() * 255, Math.random() * 255, Math.random() * 255], // start with random color
    xSpeed: 20,
    ySpeed: 10
}
*/

// allow user to define canvas size
var xCanvas = prompt("How many pixels wide do you want the canvas to be?");
// check if xCanvas is a number
while(isNaN(xCanvas)){
    xCanvas = prompt("Please enter a number for the width of the canvas in pixels.");
}

var yCanvas = prompt("How many pixels long do you want the canvas to be?");
// check if yCanvas is a number
while(isNaN(yCanvas)){
    yCanvas = prompt("Please enter a number for the width of the canvas in pixels.");
}

// color, xSpeed, and ySpeed are optional
function Circle(x, y, size, color, xSpeed, ySpeed){
    this.xCoor = x;
    this.yCoor = y;
    this.diameter = size;
    // makes default color black, default xSpeed 5, default ySpeed 7
    this.color = color || [0, 0, 0];
    this.xSpeed = xSpeed || 5;
    this.ySpeed = ySpeed || 7;
}

// generates random circle every time function is called
function ranCircle(){
    return new Circle(random(0, xCanvas), random(0, yCanvas), random(0, 100), [random(0, 256), random(0, 256), random(0, 256)], random(0, 15), random(0, 15));
}

// 2, 5, 9, 16 circles when refreshing
var circles = [];

function setup() {
    createCanvas(xCanvas, yCanvas);
    frameRate(30);
    
    // chooses 2, 5, 9, or 16 circles
    var numCircles = random([2, 5, 9, 16]);
    // push random number of circles into the array
    for(var i = 0; i < numCircles; i++){
        circles.push(ranCircle());
    }
}

function draw() {
    background(0, 250, 200);
    for(var i = 0; i < circles.length; i++){
        fill(circles[i].color);
        ellipse(circles[i].xCoor, circles[i].yCoor, circles[i].diameter);
        
        // if we hit edge of canvas
        if(circles[i].xCoor > xCanvas || circles[i].xCoor < 0){
            // check if speed is positive or negative
            if(circles[i].xSpeed > 0){
                circles[i].xSpeed += 1;
                circles[i].ySpeed += 1;
            } else{
                circles[i].xSpeed -= 1;
                circles[i].ySpeed += 1;
            }
            // reverse direction
            circles[i].xSpeed = -circles[i].xSpeed;
            // random color
            circles[i].color = [random(0, 256), random(0, 256), random(0, 256)];
        }
        if(circles[i].yCoor > yCanvas || circles[i].yCoor < 0){
            // check if speed is positive or negative
            if(circles[i].ySpeed > 0){
                circles[i].xSpeed += 1;
                circles[i].ySpeed += 1;
            } else{
                circles[i].xSpeed += 1;
                circles[i].ySpeed -= 1;
            }
            circles[i].ySpeed = -circles[i].ySpeed;
            // random size
            circles[i].diameter = random(0, 50);
        }
        
        if(circles[i].xSpeed > 15 || circles[i].xSpeed < -15){
            circles[i].xSpeed = 1;
        }
        if(circles[i].ySpeed > 15 || circles[i].ySpeed < -15){
            circles[i].ySpeed = 1;
        }
        
        // move circle across screen
        circles[i].xCoor += circles[i].xSpeed;
        circles[i].yCoor += circles[i].ySpeed;
    }
}