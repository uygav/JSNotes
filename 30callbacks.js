sum(2, 3, displayConsole);

function sum(x, y, callback) {
  let result = x + y;
  callback(result);
}

function displayConsole(output) {
  console.log(output);
}
// function displayDOM(output){
//     document.getElementById("myLabel").innerHTML = output
// }
