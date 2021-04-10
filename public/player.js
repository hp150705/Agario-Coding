
class Player {
  constructor(x,y,color) {
    this.x = x;
    this.y = y;
    this.diameter = 50;
    this.color = color;
  }
  drawPlayer(){
    fill(this.color);
    circle(this.x,this.y,this.diameter)
  }
  updatePlayer(){
    this.x = mouseX +50;
    this.y = mouseY + 50;
  }
  eat(ppcs){
    ppcs.forEach(ppc => {
      let d = dist(ppc.x,ppc.y,this.x,this.y);
      if (d < (this.diameter + ppc.diameter-50)) {
        let index = ppcs.indexOf(ppc);
        ppcs.splice(index,1);
        this.diameter += 1;
      }
    })
  }
}