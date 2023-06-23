try {
  let x = window.prompt("enter a number");
  x = Number(x);

  if (isNaN(x)) throw "that wasnt a number";
  if (x == "") throw "that was empty";

  console.log(`${x} is a number`);
} catch (error) {
  console.log(error);
} finally {
  console.log("this always executes");
}
