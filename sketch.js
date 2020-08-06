
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,ground1,ground2;
var box1;
function setup() {
  createCanvas(800,400);
  ground1=new Ground (400,200,20,100)
  ground2=new Ground (450,300,20,100)
  box1=new Box (400,215,15,15);
  box2=new Box (415,215,15,15);
  box3=new Box (430,215,15,15);
  box4=new Box (385,215,15,15);
  box5=new Box (471,215,15,15);
  box6=new Box (400,230,15,15);
  box7=new Box (415,230,15,15);
  box8=new Box (385,230,15,15);
  box9=new Box (400,245,15,15);
  box10=new Box (450,315,15,15);
  box11=new Box (475,315,15,15);
  box12=new Box (490,315,15,15);
  box13=new Box (435,315,15,15);
  box14=new Box (420,315,15,15);
  box15=new Box (450,330,15,15);
  box16=new Box (475,330,15,15);
  box17=new Box (435,330,15,15);
  box18=new Box (450,330,15,15);
  slingshot = new SlingShot(Polygon.body,450,50)
  polygon=new Polygon (450,50,15,15);
}

function draw() {
  background(255,255,255); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}