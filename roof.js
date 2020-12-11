class Roof{
    constructor(){
        var options={
           'isStatic':true,
           'restitution':0.3,
           'friction':0.5,
           'density':0.8,
        }
        this.body=Bodies.rectangle(400,100,400,50,options);
        World.add(world,this.body);
    }
    
    display(){
  push ();
  fill (220,220,220);
  rectMode (CENTER);
  rect (400,100,400,50);
  pop ();
    }
   
}