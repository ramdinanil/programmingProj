//The setup function only happens once
var diam1 = 0; //Circle Size function
function setup()
{
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(255,255,204); // Tan Background
  //yellow circle
  stroke(255,255,127) // Yellow stroke
  fill(255,255,127,150); // Yellow circle fill
  ellipse(width/2,height/2,diam1,diam1); // center circle 
 //Red Circle
     stroke(255,105,107) // Red stroke
  fill(255,102,101,150); // Red Fill
  ellipse(width/5,height/5,diam1,diam1);// Upper left of the canvas 
 //Green Circle 
  stroke(102,255,102) // Green stroke
  fill(102,255,102,150); // Green circle fill
  ellipse(400,110,diam1,diam1); // Upper right circle 
 //Orange Circle 
  stroke(255,128,0) // Orange stroke
  fill(255,128,0,150); // Orange circle fill
  ellipse(400,400,diam1,diam1); // Bottom right
 //Blue Circle 
  stroke(55,155,255) // Blue stroke
  fill(51,152,255,150); // Blue circle fill
  ellipse(100,400,diam1,diam1); // center circle
//White Circle
    stroke(0,0,0) // Blue stroke
  fill(255,255,255,50); // Blue circle fill
  ellipse(mouseX,mouseY,diam1,diam1); // center circle 
    textAlign(CENTER);
text("Color Blast", 255, 255); // "Color Blast" text
    textSize(50) //Text size
    
}
function mouseWheel() { //Mouse Wheel Function 
    //increases size of circles
    diam1 = diam1+15 }
    function mouseReleased() { //Circles size decrease when mouse is released
    diam1 = diam1-50
}
