var b1, b2,b3,b4,b5,b6,b7,b8,b9,b10;

function setup() {
  createCanvas(450,400);
  b1=new Building();
  b1.position=1;
  b1.floors=15;
  
  b2=new Building();
  b2.position=2;
  b2.floors=15;
  
    b3=new Building();
  b3.position=3;
  b3.floors=16;
  
  b4=new Building();
  b4.position=4;
  b4.floors=15;
  
  b5=new Building();
  b5.position=5;
  b5.floors=18;
  
  b6=new Building();
  b6.position=6;
  b6.floors=16;
  
  b7=new Building();
  b7.position=7;
  b7.floors=20;
  
  b8=new Building();
  b8.position=8;
  b8.floors=15;
  
  b9=new Building();
  b9.position=9;
  b9.floors=20;
  
  b10=new Building();
  b10.position=10;
  b10.floors=15;
  
}
  
  function draw() {
  background("blue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
    }