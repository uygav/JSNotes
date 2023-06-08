let fruits = ["apple", "orange", "banana"];

fruits[2] = "coconut";

fruits.push("lemon"); // add an elements
fruits.pop(); // removes last element
fruits.unshift("mango"); // add element to beginning
fruits.shift();

let length = fruits.length;
let index = fruits.indexOf("kiwi");

console.log(fruits);
console.log(length);
console.log(index);
//////////////////////////////

let prices = [5, 10, 15, 20, 25];

for (let i = prices.length - 1; i >= 0; i -= 1) {
  console.log(prices[i]);
}

for (let price of prices) {
  console.log(price);
}
///////////////////////
let userName = "uygar";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...numbers);
console.log(...userName);
////////////////////////////////

let class1 = ["spongebob", "patrick", "sandy"];
let class2 = ["squidward", "mr krabs", "plankton"];

class1.push(...class2);

console.log(...class1);
