let userName = "uygar muntas";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("m"));
console.log(userName.lastIndexOf("m"));
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);
