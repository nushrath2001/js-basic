// there are mainly 4 types of opeartors
// Arthametic operations

// sub 
var a = 50;
var b = 100;
console.log(a-b);

// add 
var a=50;
var b=100;
console.log(a+b)

// mul 
var a = 50;
var b = 100;
console.log(a*b);

// division 
var a = 50;
var b = 100;
console.log(a/b);

// %
var a = 50;
var b = 100;
console.log(a%b);

// decrement --
// pre decrement 
var a = 30;
console.log(--a);
// post decrement
var a = 234;
console.log(a--);
console.log(a);

// increment ++
// pre increment
var a = 34;
console.log(++a);
// post increment
var a = 30;
console.log(a++);
console.log(a);




// 1. logical operator
var a=100;
var b=78;
console.log(a>b && b<a)
//  ||(OR)  
var a=10;
var b=8;
console.log(a<b || b<a)
//  !(NOT) in this if the condition is true it will show it as false
var a=100;
var b=84;
console.log(!(a<b))

// 2.Relational operator
// <,>,<=,>=
var a=30;
var b=20;
console.log(a>b)
var a=30;
var b=20;
console.log(a<b)
var a=30;
var b=20;
console.log(a<=b)
var a=30;
var b=20;
console.log(a>=b)

// 3.Equality operator 
// lose equality ==
var a=20;
var b=20;
console.log(a==b)
// strict equality===
var a="its me";
var b=20;
console.log(a===b)

// 4. Ternary operator (or) conditional operator
var percentage=90 ;
percentage > 75 ? console.log("Eligible for interview"):console.log("Not eligible for interview") 


// conditional statements

// if condition
var age= 15;
if (age<18){
    console.log("qualifies for drivimg");
}

// if-else condition
var age=15;
if (age>18){
    console.log("qualifies for driving");
}
else{
    console.log("not qualifies");
}
// if-else-if statement
var age=18;
if(age>18){
    console.log("not qualifies for driving")
}
else if( age==18){
console.log("u will get to drive ")
}
else{
    console.log("u r qualified")
}
