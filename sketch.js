var sprite1;
function setup() {
  createCanvas(400,400);
  sprite1 = createSprite(200,200);
}

function draw() 
{
 background(30);

 if(keyIsDown(LEFT_ARROW)){
  sprite1.x -= 1;
 }

 if(keyIsDown(UP_ARROW)){
  sprite1.y -= 1;
 }
 if(keyIsDown(DOWN_ARROW)){
  sprite1.y += 1;
 }
 if(keyDown("right")){
  sprite1.x = sprite1.x+1;
 }




 drawSprites();
}