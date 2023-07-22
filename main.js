function setup() {
canvas = createCanvas(400, 500);
video = createCapture(VIDEO);
canvas.center();
video.hide();
}

function draw() {
image(video, 100, 125, 200, 250)


circle(350, 50, 50)

fill("blue");
rect(75, 425, 250, 50);
rect(75, 25, 250, 50);

circle(350, 450, 50);
fill("red");
circle(50, 50, 50);
rect(75, 425, 250, 50);
fill("green");

circle(50, 450, 50);
rect(325, 75, 50, 350);
fill("yellow");
rect(25, 75, 50, 350);
}

function preload() {

}