// Arrow function comes under anonymous function.
// Arrow functions is called as lamda function.

// Lamda refers to anonymous function in programming.

// Syntax:
// let variable = (paramter)=>{
//     //block of code
// }

// variable();

//Example 1: Arrow function with no parameters and no return type.

// let greet = ():void =>
// {
//     console.log("Hello Typescript");
// }
// greet();

//Example 2 :- Arrow function with parameters and a Return Type.

// let add = (a:number,b:number):number =>{
//     return a+b;
// }
// console.log(add(4,5));

//Example 3 :- Arrow function with implict return

// let add = (a:number,b:number):number => a+b;

//Example 4:- Arrow function with optional parameters.

// let displayDetails = (id:number,name:string,mailId?:string):void =>
// {
//     console.log("ID:", id);
//     console.log("Name:", name);
//     if(mailId !==undefined)
//     {
//         console.log("Email:", mailId);
//     }
// }

// displayDetails(123,"Scott","mayuri@gmail.com");
// displayDetails(123,"scott");

//Example 5: Arrow function with Default parameter.

// let calculateDiscount  (price:number,rate:number=0.50):void =>
// {
//     let discount:number=price *rate;
//     console.log("Discount Amount:", discount);

// }
// calculateDiscount(1000);

//Example 6 :Arrow function with rest parameters

// let findElements(...elements:(number|string)[]):number=>
// {
//     return elements.length;
// }
// console.log(findElements(3, "john",2,1,"scott"));