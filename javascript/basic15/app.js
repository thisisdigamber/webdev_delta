let info = ["shubham" , 4 , true];
console.log(info);

let nums = [1,2,3,4,5];
console.log(nums);

let empty = [];
console.log(empty.length);
console.log(empty);

console.log([].length);

console.log(info[0][0]);


let fruits = ["apple", "mango", "banana"];
console.log(fruits);
fruits[0] = "kiwi";
console.log(fruits);
fruits[10] = "orange";
console.log(fruits);




let color = ["red", "green", "blue"];
console.log(color.indexOf("green"));


// splice() method

let months = ["jan", "july", "march", "august"];
console.log(months);

let removedmonths = months.splice(0, 2, "july","june");
console.log(months);

console.log("removed months : ",removedmonths);


let complang = ["c",  "c++", "html" ,"javascript" , "python" , "java", "c#", "sql"];

console.log(complang);
console.log("index of js after reversing array : " , complang.reverse().indexOf("javascript"));   // reverse the array and then find the index of javascript


let cars = ["bmw", "audi", "mercedes", "toyota", "honda"];

console.log(cars);

cars.push("ford");  // add element at the end of the array

console.log(cars);

cars.pop("ford");  // remove element from the end of the array

console.log(cars);

cars.unshift("ford");  // add element at the start of the array

console.log(cars);

cars.shift("ford");  // remove element from the start of the array

console.log(cars);


console.log(cars.indexOf("mercedes"));
console.log(cars.includes("ford"));

console.log(cars.concat(["ford", "fiat", "chevrolet"]));
console.log(cars.concat(info));

console.log(cars.reverse());

// slice() method

// splice() method

// array references

// const array

// nested array

