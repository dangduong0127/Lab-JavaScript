'use strict';

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`Tốc độ mới sau khi tăng 10km là: ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`Tốc độ mới sau khi tăng 10km là: ${this.speed}`);
  }

  get SpeedUs() {
    return this.speed / 1.6;
  }
  set SpeedUs(speed) {
    this.speed = speed * 1.6;
  }
}
const BMW = new CarCl('BMW', 120);
const Mercedes = new CarCl('Mercedes', 95);

BMW.accelerate();
BMW.brake();
console.log(BMW.SpeedUs);
Mercedes.accelerate();
Mercedes.brake();
console.log(Mercedes.SpeedUs);
