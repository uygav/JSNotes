const greeting = function (userName) {
  console.log(`hello ${userName}`);
};
greeting("uygar");

const greeting2 = (userName) => console.log(`hello ${userName}`);
greeting2("uygar");

//

const percent = (x, y) => (x / y) * 100;

console.log(`${percent(45, 100)}%`);

//

let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((Element) => console.log(Element));
