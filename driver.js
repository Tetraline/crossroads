class Driver {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  update(drivers, cars) {
    let canMove = true;
    let desiredSpace = 30 * Math.random() + 85;
    drivers.forEach((driver) => {
      if (driver.x > this.x && driver.x < this.x + desiredSpace) {
        canMove = false;
      }
    });
    if (this.x > 230 && this.x < 260) {
      cars.forEach((car) => {
        if (car.y > 260 && car.y < 400) {
          canMove = false;
        }
      });
    }
    if (canMove) {
      this.x += 2;
    }
    if (this.x > 700) {
      this.x = 0;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
    ctx.fillStyle = "blue";
    ctx.fill();
  }
}
