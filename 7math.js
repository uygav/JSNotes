// let x;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;

// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);
// maximum = Math.max(x, y, z);
// minimum = Math.min(x, y, z);

// console.log(x);

////////////////////////////////////////

// let a;
// let b;
// let c;

// a = window.prompt("enter side a");
// a = Number(a);

// b = window.prompt("enter side b");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log("side c : ", c);

////////////////////////////////////////

document.getElementById("submitButton").onclick = function () {
  a = document.getElementById("aTextBox").value;
  a = Number(a);

  b = document.getElementById("bTextBox").value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("cLabel").innerHTML = "side C " + c;
};
