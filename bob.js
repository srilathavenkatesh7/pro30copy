class Bob {
    constructor(x,y){
        var options ={
            'restitution':1,
            'friction':0,
            'frictionAir':0,
            'slop':1,
           'inertia':Infinity,
            'isStatic':false,
        }
        this.x=x;
        this.y=y;
        
        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
    display(){
        
         push ()
         strokeWeight (3);
         fill (255,0,255);
         ellipseMode (RADIUS);
         ellipse(this.body.position.x,this.body.position.y,20,20);
         pop ();
    }
    }