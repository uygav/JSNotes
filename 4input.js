// let username = window.prompt("what's your name");
// console.log(username);

//
//
//
//

let username;

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;

  console.log("you are ", username);
  document.getElementById("myLabel").innerHTML = "hello " + username;
};
