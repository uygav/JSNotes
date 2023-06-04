let grade = "95";

switch (true) {
  case grade >= 90:
    console.log("you did great");
    break;
  case grade >= 70:
    console.log("you did good");
    break;
  case grade >= 50:
    console.log("you did okay");
    break;
  case grade >= 30:
    console.log("you failed");
    break;
  case grade >= 10:
    console.log("you failed");
    break;
  default:
    console.log(grade, "is not a letter grade");
}
