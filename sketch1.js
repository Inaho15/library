var frect, mrect;
function setup() {
  createCanvas(800,400);
  frect = createSprite(200,200,60,40);
  frect.shapeColor = "Purple";
  mrect = createSprite(200,300,40.20);
  mrect.shapeColor = "Green";
  mrect.velocityY = -2;
  frect.velocityY = 3;
}

function draw() {
  background(255,255,255);
  bounceoff(mrect,frect);
drawSprites();
    }
  function bounceoff(object1, object2) {
    if (object1.x-object2.x<object2.width/2+object1.width/2
      &&object2.x-object1.x<object2.width/2+object1.width/2){
        object1.velocityX = object1.velocityX* (-1);
        object2.velocityX = object2.velocityX* (-1);
      }  
   if  (object1.y-object2.y<object2.height/2+object1.height/2
          &&object2.y-object1.y<object2.height/2+object1.height/2){
            object1.velocityY = object1.velocityY* (-1);
            object2.velocityY = object2.velocityY* (-1);
          }  
  }