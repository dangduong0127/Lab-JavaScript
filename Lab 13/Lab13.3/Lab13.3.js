'use strict';

const Car = function (branch, speed) {
  this.branch = branch;
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

const EV = function (branch, speed, charge) {
  Car.call(this, branch, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.branch} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const Car1 = new Car('Mercedes', 20);
const Car2 = new EV('Tesla', 120, 23);

console.log(Car1);
console.log(Car2);
Car2.accelerate();

const ev = new EV('BMW', 120, 30);
ev.chargeBattery(90);
console.log(`Battery after charge: ${ev.charge}%`);
ev.accelerate();
ev.brake();
