var img;

const snowFlakeCount = 1000;
const size = 5;
const gravity = 0.5;

const snowFlakes = [];

function preload(){
    img = loadImage('img/bg.png');
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

    

    noStroke();
  
    rectMode(CENTER);
    
    for(let i = 0; i < snowFlakeCount; i ++){
        snowFlakes.push({
        x: random(width),
        y: random(height)
        })
    }
}

function draw() {

    image(img, 0, 0, width, height);
    fill(255);
  
    for(let i = 0; i < snowFlakes.length; i++){
      let snowFlake = snowFlakes[i];
      
      ellipse(snowFlake.x, snowFlake.y, size);
      
      if(snowFlake.y > height + size){
       snowFlake.y = -size;
      } else {
        snowFlake.y += gravity
      }
    }
}