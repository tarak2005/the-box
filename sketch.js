var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,base, Side1;
var baseSprite, side1, side2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	baseSprite= createSprite(400,650,200,20);
	baseSprite.shapeColor="red";

	side1= createSprite(300,610,20,100);
	side1.shapeColor="red";

	side2= createSprite(500,610,20,100);
	side2.shapeColor="red";

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, friction:0.8, density:1.0,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    base = Bodies.rectangle(width/2, 630, width, 10 ,{isStatic:true});
    World.add(world, base);
	 
    Side1 = Bodies.rectangle(300, 610, 20, 100 ,{isStatic:true});
    World.add(world, Side1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);


  }
}



