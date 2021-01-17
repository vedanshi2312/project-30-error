const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //create bodies here
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    ground = new Ground(600,height,1200,20);
    block1 =new block(330,225,30,40);
    block2 = new block(330,225,30,40);
    block3 =new block(330,225,30,40);
    block4 = new block(330,225,30,40);
    block5 = new block(330,225,30,40);
    block6 = new block(330,225,30,40);
    block7 =new  block(330,225,30,40);
    block8 = new block(330,225,30,40);
    block9 =new block(330,225,30,40);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    slingshot.display();
    ground.display();
    slingshot.display();
    block1.display ();   
    block2.display ();   
    block3.display ();   
    block4.display ();   
    block5.display ();   
    block6.display ();   
    block7.display ();   
    block8.display (); 
    fill("pink");  
    block9.display (); 
    fill("gold"); 
imageMode (CENTER)
image(polygon_img,polygon.position.x,polygon.y,40,40);


}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        SlingShot.attach(polygon);
    }
    }