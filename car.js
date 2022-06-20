class Car {
  constructor(x, y, w, h, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type;
    this.hasSensor = false;

    if (type == "horizontal") {
      this.hasSensor = true;
      this.sensor = new Sensor(this);
    }

    this.controls = new Controls(type);
  }

  update() {
    if (this.controls.forward) {
      this.y -= 2;
    }
    if (this.controls.reverse) {
      this.y += 2;
    }
    if (this.y < 0) {
      this.y = 1500;
    }
    if (this.hasSensor) {
      //this.sensor.update();
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
    ctx.fill();
    if (this.hasSensor) {
      this.sensor.draw(ctx);
    }
  }
}
