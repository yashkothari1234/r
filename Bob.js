
      class Bob{
        constructor(x,y,width,height){
            var options = {
                isStatic : false,
                restitution : 0.6,
                friction : 5,
                density :6
            }
            this.body = Matter.Bodies.circle(x,y,15,options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
        }
        display(){
    ellipseMode(CENTER);
    fill("red");
    ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
        }
      }