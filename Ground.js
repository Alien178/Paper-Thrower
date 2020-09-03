class Ground {
    constructor(x, y, width, height) {

        var dontyougo ={
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, dontyougo);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    show(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}