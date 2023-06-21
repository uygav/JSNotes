const car = {
  model: "mustang",
  color: "red",
  year: 2023,

  drive: function () {
    console.log("you drive a car");
  },
  brake: function () {
    console.log("you step on the brakes");
  },
};
console.log(car.model);
console.log(car.color);
console.log(car.year);
car.drive();
car.brake();
