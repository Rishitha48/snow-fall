class Snow{
    constructer(x,y){
        var options={
            friction:0.001,
            restitutuion:0.1,
            density:0.5,
        }
        this.image=loadImage("snow4.webp");
        this.body=Bodies.circle(x,y,15,options);
        this.r=15;
        World.add(world,this.body)
    }
    update(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,800),y:10})
    }

    }

   display(){
       var pos=this.body.position;
       push();
       translate(pos.x,pos.y)
       rotate(this.body.angle)
       imageMode(CENTER);
       image(this.image,this.x,this.y,this.r,this.r);
       pop();
   }

}