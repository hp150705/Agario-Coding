class Phytoplancton{
  constructor(pColor) {
    this.x = random(10,490);
    this.y = random(10,490);
    this.color = pColor;
    console.log(this.color);
    this.diameter = 18;
  }
  drawPlancton() {
    noStroke();
    fill(this.color);
    circle(this.x,this.y,this.diameter);
  }
}

