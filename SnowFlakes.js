class SnowFlakes{
    constructor(){
          this.x = random(0, 800);
          this.y = random(0, 400);
          this.image =loadImage("snow2.png");
          }

          update() {
              this.y = this.y + 10;

              if (this.y > 400) {
                  this.y = random(0, 400);
                  this.x = random(0, 800);
              }
          }

          display() {
              imageMode(CENTER);
              image(this.image,this.x,this.y,100,100);
          }
    
}