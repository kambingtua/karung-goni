let jump
let x,y
let pemain1,pemain2
let sfxLoncat
let bg,p1,p2,p3

function preload() {
  bg = loadImage('bg.jpg')
  p1 = loadImage('p1.png')
  p2 = loadImage('p2.png')
  p3 = loadImage('p3.png')
  jump = loadSound('sound.mp3')

}
  
function garis(x,y){
   line(x,y,x, height-y)
}
function setup() {
  createCanvas(600, 400);
  
  
  
  pemain1 = new Pemain(120,p1,"Vira")
  pemain2 = new Pemain(180,p2,"Jamal")
  pemain3 = new Pemain(250,p3,"Udin")
}

function draw() {
  background(bg);
  
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  pemain3.tampilkan()  
  
  pemain1.finish()
  pemain2.finish()
  pemain3.finish()

  
}


function keyPressed(){
  if (keyCode === LEFT_ARROW){
    pemain1.maju()
    jump.play()
  }
    
  else if (keyCode === RIGHT_ARROW){
    pemain2.maju()
    jump.play()
  }
  else if (keyCode === UP_ARROW){
    pemain3.maju()
    jump.play()
  }
}