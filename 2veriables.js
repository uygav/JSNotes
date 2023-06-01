let firstName = "uygar";
let age = 21;
let student = true;

console.log("hello ", firstName);
console.log("you are ", age, "years old");
console.log("entrolled ", student);

document.getElementById("p1").innerHTML = "hello" + firstName;
document.getElementById("p2").innerHTML = "you are " + age + " years old";
document.getElementById("p3").innerHTML = "enrolled: " + student;
