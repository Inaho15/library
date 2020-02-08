var frect, mrect;
function setup() {
  createCanvas(800,400);
  frect = createSprite(0,0,100,40);
  frect.shapeColor = "Purple";
  mrect = createSprite(200,300,40.20);
  mrect.shapeColor = "Green";
}
function draw() {
    background(255,255,255);  
    mrect.x = World.mouseX;
    mrect.y = World.mouseY;
if (
    (((mrect.x > frect.x) && (mrect.x <= (frect.x + frect.width))) || ((mrect.x > frect.x) && ((mrect.x+mrect.width) > frect.x)))
    && ((mrect.y < frect.y) && ((mrect.y + mrect.height) >= frect.y))
   )
   {
    mrect.shapeColor = "red";
    frect.shapeColor = "blue";
   } else {
    frect.shapeColor = "Purple";
    mrect.shapeColor = "Green";
   }
   drawSprites();
}
