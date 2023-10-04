class Pemain {
  constructor(y, img,nama) {
    this.d = 80
    this.x = 15
    this.y = y
    this.speed = 15
    this.img = img
    this.nama = nama
  }
  
  tampilkan(){
    image(this.img, this.x , this.y, this.d-15, this.d)
  }
  
  maju(){
    this.x += this.speed
  }
  
  finish(){
    if(this.x > width-65) {
      fill(225)
      stroke(0)
      textSize(50)
      textAlign(CENTER)
      text(this.nama+ ' Finish', width/2 , height/2)
      noLoop()
    }
    
  }
}