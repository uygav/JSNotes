class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

const car1 = new Car("mustang", 2023, "red");
const car2 = new Car("corvette", 2024, "blue");
const car3 = new Car("mustang", 2022, "yellow");

function displayInfo(car) {
  console.log(car.model);
  console.log(car.year);
  console.log(car.color);
}

displayInfo(car1);

function changeColor(car, color) {
  car.color = color;
}

changeColor(car3, "gold");
