'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Tốc độ mới sau khi tăng 10km là: ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Tốc độ mới sau khi giảm 10km là: ${this.speed}`);
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);
console.log(BMW);

BMW.accelerate();
BMW.brake();
Mercedes.accelerate();
Mercedes.brake();
