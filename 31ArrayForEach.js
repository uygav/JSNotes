let students = ["sungerbob", "patrick", "squidward"];

function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(element) {
  console.log(element);
}

students.forEach(capitalize);
students.forEach(print);
