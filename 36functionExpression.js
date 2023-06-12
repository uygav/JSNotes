const greeting = function () {
  console.log("hello !");
};
greeting();

let count = 0;
// function increaseCount() {
//   count += 1;
//   document.getElementById("myLabel").innerHTML = count;
// }
// function decreaseCount() {
//   count -= 1;
//   document.getElementById("myLabel").innerHTML = count;
// }
// we dont need declare functions , look label of html

// or

document.getElementById("increaseButton").onclick = function () {
  count += 1;
  document.getElementById("myLabel").innerHTML = count;
};
document.getElementById("decreaseButton").onclick = function () {
  count -= 1;
  document.getElementById("myLabel").innerHTML = count;
};
