class Walker {
  
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector();
  	this.w = 10;
  }
  
  move() {
    // 새로운 속도 만들기
    this.vel.add(p5.Vector.random2D());
    
    
    // 새 위치(벡터) = 이전 위치(벡터) + 속도(벡터)
    this.pos.add(this.vel);
    if(this.pos.x<0) {
      this.vel.mult(-1);
      this.vel.mult
  }
  
  show() {
	ellipse(this.pos.x, this.pos.y, this.w);
  }
}