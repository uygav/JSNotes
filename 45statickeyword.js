class Car {
  static numberOfCars = 0;

  constructor(model) {
    this.model = model;
    Car.numberOfCars += 1;
  }
  static startRace() {
    console.log("3..2..1..GO!");
  }
}

const car1 = new Car("mustang");
const car2 = new Car("corvette");
const car3 = new Car("bmw");

console.log(Car.numberOfCars);

car1.startRace();
