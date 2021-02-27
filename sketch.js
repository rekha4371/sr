var f,m;

function setup() {
  createCanvas(800,800);
  f = createSprite(400, 200, 50, 50);
  m = createSprite(400,150,50,100);
  f.shapeColor = "red";
  m.shapeColor = "purple";
}

function draw() {
  background("black");  
  m.x = mouseX;
  m.y = mouseY;

  console.log(m.x-f.x);

  if(m.x - f.x <m.width/2 + f.width/2){
    m.shapeColor="white";
  }
  else{
    m.shapeColor = "purple";
  }

  drawSprites();
}