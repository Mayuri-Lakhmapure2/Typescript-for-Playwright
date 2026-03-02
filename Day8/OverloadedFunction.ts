//Overloaded Function

//Function overloading allows you to define multiple versions of a function with the same name but different parameters or return types.

//step1 : write a signatures of functions.
//step2 : implement a function.
//step3 : calling function.

// Example 1
// Different parameters type (Datatypes)

// function getInfo(id : number):string;
// function getInfo( name : string) : string;

// function getInfo(param: number|string):string
// {
//     if(typeof param === "number")
//     {
//         return (`User ID is ${param}`);
//     }
//     else
//     {
//         return(`User name is ${param}`);
//     }
// }

// console.log(getInfo(101));
// console.log(getInfo("John"));

//Example 2: Different Number of parameters

// function add(a:number,b:number):number;
// function add(a:number, b:number,c:number):number;

// function add (a: number, b:number, c?:number):number
// {
//     if(c!== undefined)
//     {
//         return a+b+c;
//     }
//         return a+b;
// }

// console.log(add(10,20));
// console.log(add(30,70,10));

//Example 3 : Different return types.

// function processInput (input:string):string;
// function processInput(input:number):number;

// function processInput(input:string |number):string | number
// {
//     if(typeof input === "string")
//     {
//         return input.toUpperCase();
//     }
//     else
//     {
//         return input*2;
//     }
// }

// console.log(processInput("Welcome"));
// console.log(processInput(40));

//Example 4 : Similar Return Type

function greet (name:string):string;
function greet (age:number):string;
function greet (isMarried:boolean):string;

function greet (value:string|number|boolean):string
{
    if(typeof value === "string")
    {
        return `Hello ${value}`;
    }
    else if (typeof value === "number")
    {
        return `You are ${value} years old.`
    }
    else 
    {
        let res:string = value? "married": "single"
        return res;
    }
}

console.log(greet("John"));
console.log(greet(30));
console.log(greet(true));
console.log(greet(false));