class Ball {
    constructor(x, y, radius) {
      var offyougo = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
      }
      this.body = Bodies.circle(x, y, radius, offyougo);
      this.radius = radius;
      //this.height = height;
      
      World.add(world, this.body);
    }
    
    dishow() {
      var pos = this.body.position;
      //var angle = this.body.angle;
      
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
      ellipse(pos.x, pos.y, this.radius);
      //pop();
    }
  }