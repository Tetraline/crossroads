const canvas = document.getElementById("myCanvas");
canvas.height = 600;
canvas.width = 600;

//const networkCanvas = document.getElementById("networkCanvas");
//networkCanvas.width = 300;

const ctx = canvas.getContext("2d");

// car(x,y,w,h)
let cars = [];
const carSpacing = [
  800, 900, 1000, 1200, 1300, 1500, 1700, 1800, 1900, 2100, 2200,
];
carSpacing.forEach((y) => {
  cars.push(new Car(300, y, 30, 50, "vertical"));
});

drivers = [];
drivers.push(new Driver(260, 301, 50, 30));
drivers.push(new Driver(160, 300, 50, 30));
drivers.push(new Driver(60, 299, 50, 30));
drivers.push(new Driver(-30, 301, 50, 30));

console.log(drivers);
animate();

function animate() {
  cars.forEach((car) => {
    car.update();
    //if (car.hasSensor) {
    //  car.sensor.update(cars);
    //}
  });
  canvas.height = 600;

  ctx.beginPath();
  ctx.moveTo(270, 0);
  ctx.lineTo(270, 260);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(330, 0);
  ctx.lineTo(330, 260);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(270, 350);
  ctx.lineTo(270, 700);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(330, 350);
  ctx.lineTo(330, 700);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 260);
  ctx.lineTo(270, 260);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, 350);
  ctx.lineTo(270, 350);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(330, 260);
  ctx.lineTo(1000, 260);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(330, 350);
  ctx.lineTo(1000, 350);
  ctx.stroke();
  cars.forEach((car) => {
    car.draw(ctx);
  });
  drivers.forEach((driver) => {
    driver.update(drivers, cars);
  });
  drivers.forEach((driver) => {
    driver.draw(ctx);
  });
  requestAnimationFrame(animate);
}
