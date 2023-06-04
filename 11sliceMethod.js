let fullName = "uygar muntas";
let firstName;
let lastName;

firstName = fullName.slice(0, 3);
lastName = fullName.slice(4);

console.log(firstName);
console.log(lastName);

////////////////////////////////////////

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
