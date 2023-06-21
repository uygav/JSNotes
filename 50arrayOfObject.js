class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`you drive the ${this.model}`);
  }
}

const car1 = new Car("mustang", 2023, "red");
const car2 = new Car("corvette", 2024, "blue");
const cor3 = new Car("lambo", 2022, "yellow");

const cars = [car1, car2, car3];

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

cars[0].drive();
cars[1].drive();
cars[2].drive();

function startRace(cars) {
  for (const car of cars) {
    car.drive();
  }
}

startRace(cars);
