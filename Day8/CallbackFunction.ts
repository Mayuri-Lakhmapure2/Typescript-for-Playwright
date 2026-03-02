// Callback Function

// A callback function is a function passed as an argument to another function and executed later.

// Syntax  

// function greet (name:string, smg:(messsage:string)=>void){
//     console.log(name);
//     console.log("Hello");
// }



// function showMessage (message:string){
//     console.log(message);
// }

// greet("John",showMessage);


function sum (a:number , b:number , callback:(result:number)=> void)
{
    let result = a + b;
    callback(result);
}

function displayResult(result:number):void{
    console.log(result);
}

sum (10,20,displayResult);