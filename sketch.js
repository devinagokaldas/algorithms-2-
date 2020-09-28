var a,b;

function setup() {
  createCanvas(800,400);
a =  createSprite(300, 0, 50, 50);
b= createSprite(200, 300, 50, 50);
a.shapeColor = "pink";
b.shapeColor = "lightblue";

c = createSprite(400,200,50,50)
c.shapeColor = "yellow"
}

function draw() {
  background(0); 
  a.x = mouseX
  a.y = mouseY
a.debug = true;
b.debug = true;
if (touching (a,b)) {
  a.shapeColor = "red";
  b.shapeColor = "red";
}
else{
  a.shapeColor = "pink";
  b.shapeColor = "blue"; 
}
  drawSprites();
}

function touching (ob1,ob2) {
  if (ob1.x - ob2.x < ob1.width/2 + ob2.width/2 && ob2.x - ob1.x < ob2.width/2 + ob1.width/2 && 
    ob1.y - ob2.y < ob1.height/2 + ob2.height/2 && ob2.y - ob1.y < ob2.height/2 + ob1.height/2 )
 
  {
   return true; 
  }
  else {
 return false;   
  }


}