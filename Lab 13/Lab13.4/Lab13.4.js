'use strict';

class CarCL {
  constructor(branch, speed) {
    this.branch = branch;
    this.speed = speed;
  }

  accelerate = function () {
    this.speed += 10;
    console.log(`Tốc độ mới sau khi tăng 10km là: ${this.speed}`);
  };

  brake = function () {
    this.speed -= 5;
    console.log(`Tốc độ mới sau khi giảm 10km là: ${this.speed}`);
  };
}

class EVCL extends CarCL {
  #charge;
  constructor(branch, speed, charge) {
    super(branch, speed);
    this.#charge = charge;
  }
  chargeBattery = function (chargeTo) {
    this.#charge = chargeTo;
  };

  accelerate = function () {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.branch} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
  };

  getCharge() {
    return this.#charge;
  }
}

const rivian = new EVCL('Rivian', 120, 23);
rivian.chargeBattery(90);
console.log(`Battery after charge: ${rivian.getCharge()}%`);
rivian.accelerate();
rivian.brake();

// const getCountryData = function (namePokemon) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

// getCountryData('ditto');
