const car1 = {
  model1: "mustang",
  color: "red",
  year: 2023,

  drive: function () {
    console.log(`you drive a ${this.model}`); // this.model = car1.model
  },
};

const car2 = {
  model: "corvette",
  color: "blue",
  year: 2024,

  drive: function () {
    console.log(`you drive a ${this.model}`);
  },
};
