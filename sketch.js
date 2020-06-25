var snowflaxes =[];

function preload(){
  bgimage = loadImage("snowbackground.jpg");

}
function setup() {
  createCanvas(800, 400);
   for (var i = 0; i < 15; i++) {
     snowflaxes.push(new SnowFlakes());
   }

}

function draw() {
  background(bgimage);
   for (var i = 0; i < snowflaxes.length; i++) {
     snowflaxes[i].display();
     snowflaxes[i].update();
   }

}