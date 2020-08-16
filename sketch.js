const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var suti;
var jeff;
var sammy;
var mickey;
var backgroundImg,platform;
var khushi
var slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    suti = new Suti(810, 300);
    log1 = new Log(810,260,350, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    log3 =  new Log(810,200,300, PI/2);
    jeff= new Jeff(810,260);
    box5= new Box(700,160,70,70);
    box6= new Box(920,160,70,70);
    log4 =  new Log(810,100,300, PI/2);
    sammy=new Sammy(810,50);
    box7= new Box(810,90,70,70);
    mickey= new Mickey(810,110);
  

    khushi = new Khushi(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(khushi.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    suti.display();
    suti.score();
    log1.display();

    box3.display();
    box4.display();
   

    log3.display();
    jeff.display();
    jeff.score();
    box5.display();
    box6.display();

    log4.display();
    sammy.display();
    sammy.score();    
    box7.display();
    mickey.display();
    mickey.score();
    khushi.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(khushi.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        
       slingshot.attach(khushi.body);
       
       
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}