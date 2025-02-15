// console.log("hello javascript");
// let a = 5;
// let b = 6 ;

// console.log("a = " , 5);
// console.log("b = " , 6);

// console.log("sum of a + b is " , a+b);

console.log("price of Burger");

let price1 = 250;
let price2 = 200;
let price3 = 150;
let price4 = 50;

let size = "xl";


if(size==="xl"){

    console.log(`the price is ${price1}`);
}
else if(size=== "l"){

    console.log(`the price is ${price2}`);
}

else if(size=== "m"){

    console.log(`the price is ${price3}`);
}
else{

    console.log(`the price is ${price4}`);
}


let marks = 95;

if (marks>=33){

    console.log("pass");

    if (marks>=80){
        
        console.log("outstanding");

    }

    else{

        console.log("A");
    }
}

else{

    console.log("better luck next time");
}

let string = "apple";

if(string[0] === "a" && string.length > 3 ) {
    console.log("string is good");
}
else{

    console.log("string is not good");
}


// switch statments

let color = "red";

switch(color){

    case "red":
        console.log("stop");
    break;

    case "yellow":
        console.log("slow down");
    break;

    case "green":
        console.log("go");
    break;

    default:
        console.log("traffic lights are broken");


}

// week days

let day = 3;

switch(day){

    case 1 :
        console.log("Monday");
    break;

    case 2 :
        console.log("Tuesday");
    break;
    case 3 :
        console.log("Wenesday");
    break;
    case 4 :
        console.log("Thursday");
    break;
    case 5 :
        console.log("Friday");
    break;
    case 6 :
        console.log("Saturday");
    break;
    default :
        console.log("Sunday");

}


alert("hey! hope your experience was good on this webpage")

console.error("this is an error message");
console.warn("this is a warning message");

let fname = prompt("enter your first name");
console.log(fname);

let lname = prompt("enter your last name");
console.log(lname);

console.log("welcome" , fname, lname, "!");
alert("Welcome" + " " + fname + lname + "!");

let str = "   hello   ";

console.log("str = ", str);

// .trim() method 

strNew = str.trim();

console.log("strNew = " , strNew);

// .indexOf(arg) method 

let msg1 = "ILoveCoding";
console.log(msg1.indexOf("Love"));

// method chaining

let msg = "    Hello  ";
console.log(msg.trim().toUpperCase());

// .slice()

let srting = "ilovecoding";

console.log(srting.replace("love", "do"));

console.log(srting.repeat(3));



