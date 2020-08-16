class Mickey extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("sprites/mickey.png");
      this.Visiblity = 255;
    }
  
   display(){
     //console.log(this.body.speed);
     if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 500;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 500, 500);
       pop();
     }
    }
  
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -100005){
        score++;
      }
    }
  
  
  
  };