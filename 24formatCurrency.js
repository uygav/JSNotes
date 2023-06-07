let myNum = 123456.789;

myNum = myNum.toLocaleString("en-US"); // US English
myNum = myNum.toLocaleString("hi-IN"); // hindi
myNum = myNum.toLocaleString("de-DE"); // standart german

myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" });

myNum = myNum.toLocaleString(undefined, { style: "percent" });

console.log(myNum);
