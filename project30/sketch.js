const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var leftside;
var rightside;
var leftside_con;
var rightside_con;
var rope1;
var rope2;
var base;
var balls = [];


function preload(){
  backgroundImage = loadImage("./asset/background.png")
  zombie1= loadImage("./asset/zombie.png");
  zombie2= loadImage("./asset/zombie.png");
  zombie3= loadImage("./asset/zombie.png");
  zombie4= loadImage("./asset/zombie.png");
  
 
}

function setup() {
  
  
  
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  zombie = createSprite(Width/2,height - 110);
  zombie = addImage("lefttoright",zombie1,zombie2,zombie1);
  zombie = addImage("righttoleft",zombie3,zombie4,zombie3);
  zombie.scale = 0.1;
  zombie.velocityX = 10

  breakButton = createImg('axe.png');
  breakButton.position(width - 200,height/2-50);
  breakButton.class("breakButton");
  breakButton.mousePressed(handleButtonPressed);
  
  
  rope1 = new Bridge(6,{x:245,y:30});
  rope2 = new Bridge(8,{x:40,y:30});
  
 
  rightside = new RightSide(1400,200,280,280);
  leftside = new leftSide(1400,200,280,280);
  base = new Base(200,200,280,280);
  stone = new Stone(400,200,280,280);
  
  Matter.Composite.add(rope1.body,leftside)
  Matter.Composite.add(rope2.body,rightside)

  leftside_con  = new Link(rope1,leftside)
  rightside_con  = new Link(rope2,rightside)

}
function draw() {
  background("bgImage");
  Engine.update(engine);
 
  for (var i= 0; i <= 8; i++) {
    stone=addImage("stone.png")
    var x = random (Width/2-200,width/2+300);
    var y = random(-10,40);
    var stone = new stone(x,y,80,80);
    stones.push(stone);
  }


  leftside.display()
  rightside.display()
  rope1.show()
  rope2.show()
  base.display()
  stone.display()

  drawSprite();
}

function handleButtonPressed(){
link.detach()
setTimeout(() => {
  bridge.break();
},1500 );
}