// Function is a block of statements which will perform certain task.

// // Syntax:
// function functionName(parameter):ReturnType
// {
//     //block of code
// }
// functionName ();

// Named function with no parameters and no return type.

// Example 1
// function display():void
// {
//     console.log("Welcome to Typescript");
// }
// display ();

// Example 2 : Named function with parameters and return type.

// function addNumber(x:number,y:number):number
// {
//     return x+y;
// }
// console.log (addNumber(2,3));

// Example 3: Named function with Rest parameters (no limit of parameters)

// function addNumber(...nums:number[]):number
// {
//     let i;
//     let sum:number=0;
    
//     for(i=0; i<nums.length; i++)
//         {
//         sum = sum + num[i];

//     }
//     console.log("Sum of the numbers")
// }

// addNumber(3,8);

//example 4 : Named function with rest parameters 

// function findElement (...elements:(number|string)[]):number
// {
//     return elements.length;
// }

// console.log(findElement(3,"mayuri",2,1,"scott"));

//Example 5 Named function with optional parameters

// function displayDetails(id:number,name:string,mailid?:string):void
// {
//     console.log("ID:",id);
//     console.log("Name:",name);
//     if (mailid !==undefined)
//     {
//         console.log("Email:",mailid);
//     }
// }
// displayDetails(123,"scott");

// Example 6 : Named function with Default parameters.

function calculateDiscount(price:number, rate:number=0.5):void
{
    let discount:number=price*rate;
    console.log("discount Amount:", discount);
}

calculateDiscount(1000);