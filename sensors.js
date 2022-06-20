class Sensor {
  constructor(car) {
    this.car = car;

    this.rays = [];
  }

  update(cars) {
    this.rays = [];
    //rays are defined using [startx,starty,endx,endy]
    this.rays.push([this.car.x, this.car.y, this.car.x + 100, this.car.y]);
    this.rays.push([
      this.car.x + 100,
      this.car.y,
      this.car.x + 100,
      this.car.y + 120,
    ]);
    let mustStop = false;
    cars.forEach((car) => {
      console.log(car);
    });
  }

  draw(ctx) {
    this.rays.forEach((ray) => {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "yellow";
      ctx.moveTo(ray[0], ray[1]);
      ctx.lineTo(ray[2], ray[3]);
      ctx.stroke();
    });
  }
}
